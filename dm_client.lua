local ESX = nil
local lcl = nil

local incorrectLocaleText = "\n[MKT_DM - WARNING] Locale: \"%s\" has not been found, so it was set to \"en-US\".\nTry to correct this error by changing default locale in dm_config.lua on next resource start\nor checking if desired locale is surely present in locales/locale.lua file!\n\n"

function setLocale()

    local _locale = json.encode(Locales[lcl])
    SendNUIMessage({

        type = "changeLocale",
        locale = _locale

    })

end

function changeLocale(_lcl)

    if Locales[_lcl] == nil then

        lcl = "en-US"
        Citizen.Trace(string.format(incorrectLocaleText, tostring(_lcl)))

    else

        lcl = _lcl
        setLocale()

    end

end

TriggerEvent('esx:getSharedObject', function(obj)

	ESX = obj

end)

AddEventHandler("onClientResourceStart", function(resName)

    if GetCurrentResourceName() ~= resName then return end

    SetNuiFocus(false, false)
    changeLocale(Config.DefaultLocale)

end)

Citizen.CreateThread(function()

    while true do

        Wait(1)
        if IsControlJustPressed(0, Config.Hotkey.keyCode) then

            setLocale(lcl)
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

end)

RegisterNetEvent("dm:sendMessage:incorrect")
AddEventHandler('dm:sendMessage:incorrect', function(receiver)

    TriggerEvent('esx:showNotification', string.format(Locales[lcl].IDInvalid, tostring(receiver)))

end)

RegisterNetEvent('dm:sendMessage:failed')
AddEventHandler('dm:sendMessage:failed', function(execution, receiver)

    TriggerEvent('esx:showNotification', string.format(Locales[lcl].playerOffline, tostring(receiver)))

    if execution == "2" then

        SetNuiFocus(true, true)
        SendNUIMessage({
        
            type = 'displayControl',
            display = true,
            keyname = Config.Hotkey.keyName,
            openDiv = 3
        
        })
        
    end

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

            TriggerEvent('dm:sendMessage:failed', exec, receiver)

        end

    else

        TriggerEvent('dm:sendMessage:incorrect', receiver)

    end

end)

RegisterNetEvent('dm:receiveMessage')
AddEventHandler('dm:receiveMessage', function(sender, topic, message)

    local _topic
    if topic ~= "^^^NO_TOPIC^^^" then _topic = tostring(topic) else _topic = Locales[lcl].noTopic end
    if message ~= "^^^NO_MSG^^^" then message = tostring(message) else message = Locales[lcl].noMessage end
    if not Config.MessageInNotification then
        ESX.ShowNotification(string.format(Locales[lcl].DMReceived, tostring(GetPlayerName(GetPlayerFromServerId(sender))), tostring(_topic), tostring(Config.Hotkey.keyName)))
    else
        ESX.ShowNotification(string.format(Locales[lcl].DMReceivedNotify, tostring(GetPlayerName(GetPlayerFromServerId(sender))), tostring(_topic), tostring(message), tostring(Config.Hotkey.keyName)))
    end

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