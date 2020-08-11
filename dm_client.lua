local ESX = nil

function setLocale(loc)

    local _locale
    if Locales[loc] == nil then _locale = json.encode(Locales['en-US']) else _locale = json.encode(Locales[loc]) end
    SendNUIMessage({

        type = "changeLocale",
        locale = _locale

    })

end

TriggerEvent('esx:getSharedObject', function(obj)

	ESX = obj

end)

AddEventHandler("onClientResourceStart", function(resName)

    if GetCurrentResourceName() ~= resName then return end

    SetNuiFocus(false, false)

end)

Citizen.CreateThread(function()

    while true do

        Wait(1)
        if IsControlJustPressed(0, Config.Hotkey.keyCode) then

            setLocale(Config.DefaultLocale)
            SetNuiFocus(true, true)
            SendNUIMessage({
        
                type = 'displayControl',
                display = true,
                keyname = Config.Hotkey.keyName
        
            })
            SendNUIMessage({
        
                type = 'playerName',
                playerName = GetPlayerName(GetPlayerFromServerId(GetPlayerServerId(PlayerId())))
        
            })

        end

    end

end)

RegisterNetEvent('dm:sendMessage:verified')
AddEventHandler('dm:sendMessage:verified', function(sender, receiver, message, topic)

    TriggerServerEvent('dm:sendMessage', sender, receiver, message, topic)
    TriggerEvent('esx:showNotification', Locales[Config.DefaultLocale].DMSent[1] .. tostring(GetPlayerName(GetPlayerFromServerId(sender)) .. Locales[Config.DefaultLocale].DMSent[2] .. tostring(sender) .. Locales[Config.DefaultLocale].DMSent[3]))

end)

RegisterNetEvent('dm:sendMessage:failed')
AddEventHandler('dm:sendMessage:failed', function(execution)

    TriggerEvent('esx:showNotification', Locales[Config.DefaultLocale].playerOffline)

    if execution == "2" then

        SendNUIMessage({
        
            type = 'displayControl',
            display = true,
            keyname = Config.Hotkey.keyName
        
        })

        Citizen.Trace("Sent!")
        
    end

end)

RegisterNetEvent("dm:sendMessage:incorrect")
AddEventHandler('dm:sendMessage:incorrect', function()

    TriggerEvent('esx:showNotification', Locales[Config.DefaultLocale].IDInvalid)

end)

RegisterNetEvent('dm:sendMessage:verify')
AddEventHandler('dm:sendMessage:verify', function(sender, receiver, message, topic, exec)

	local foo = function() receiver = tonumber(receiver) return tonumber(receiver) end
    if pcall(foo) and foo() ~= nil then

        local rec = tonumber(receiver)
        for k, v in ipairs(GetActivePlayers()) do

            if GetPlayerServerId(v) == rec then

                TriggerEvent('dm:sendMessage:verified', sender, receiver, message, topic)
                return

            end

            TriggerEvent('dm:sendMessage:failed', exec)

        end

    else
        TriggerEvent('dm:sendMessage:incorrect')
    end

end)

RegisterNetEvent('dm:receiveMessage')
AddEventHandler('dm:receiveMessage', function(sender, topic)

    local _topic
    if topic ~= "^^^NO_TOPIC^^^" then _topic = tostring(topic) else _topic = Locales[Config.DefaultLocale].noTopic end
    ESX.ShowNotification(Locales[Config.DefaultLocale].DMReceived[1] .. tostring(GetPlayerName(GetPlayerFromServerId(sender))) .. Locales[Config.DefaultLocale].DMReceived[2] .. tostring(_topic) .. Locales[Config.DefaultLocale].DMReceived[3] .. tostring(Config.Hotkey.keyName) .. Locales[Config.DefaultLocale].DMReceived[4])

end)

-- NUI CALLBACKS DOWN THERE \/ \/ \/ \/ \/ DON'T TOUCH

RegisterNUICallback('fetchreceived', function(data, cb)

    local lB = data.limitBy
    local el = data.element
    TriggerServerEvent('dm:fetchReceived', GetPlayerServerId(PlayerId()), lB, el)

end)

RegisterNetEvent('dm:fetchReceived:Client')
AddEventHandler('dm:fetchReceived:Client', function(result, el)

    SendNUIMessage({

        type = 'changeLimit',
        element = el

    });

    for k, v in pairs(result) do
        local msgCntnt
        if result[k].messageContent == "" then msgCntnt = "Brak wiadomości" else msgCntnt = result[k].messageContent end
        SendNUIMessage({

            type = 'fillTable',
            element = el,
            id = result[k].id,
            sender = result[k].sender,
            senderIdentifier = result[k].senderIdentifier,
            receiver = result[k].receiver,
            receiverIdentifier = result[k].receiverIdentifier,
            messageTopic = result[k].messageTopic,
            messageContent = msgCntnt,
            messageDate = result[k].messageDate

        })
    end

end)

RegisterNUICallback('exit', function(data, cb)

    SetNuiFocus(false, false)
    SendNUIMessage({

        type = 'displayControl',
        display = false

    })

end)

RegisterNUICallback('sendmessage', function(data, cb)

    SetNuiFocus(false, false)
    SendNUIMessage({

        type = 'displayControl',
        display = false

    })

    local sender = GetPlayerServerId(PlayerId())
    local receiver = data.receiver;
    local message = data.message;
    local topic = data.topic;
    local exec = tostring(2)

    TriggerEvent('dm:sendMessage:verify', sender, receiver, message, topic, exec)

end)