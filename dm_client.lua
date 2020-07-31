local Keys = {
	["ESC"] = 322, ["F1"] = 288, ["F2"] = 289, ["F3"] = 170, ["F5"] = 166, ["F6"] = 167, ["F7"] = 168, ["F8"] = 169, ["F9"] = 56, ["F10"] = 57,
	["~"] = 243, ["1"] = 157, ["2"] = 158, ["3"] = 160, ["4"] = 164, ["5"] = 165, ["6"] = 159, ["7"] = 161, ["8"] = 162, ["9"] = 163, ["-"] = 84, ["="] = 83, ["BACKSPACE"] = 177,
	["TAB"] = 37, ["Q"] = 44, ["W"] = 32, ["E"] = 38, ["R"] = 45, ["T"] = 245, ["Y"] = 246, ["U"] = 303, ["P"] = 199, ["["] = 39, ["]"] = 40, ["ENTER"] = 18,
	["CAPS"] = 137, ["A"] = 34, ["S"] = 8, ["D"] = 9, ["F"] = 23, ["G"] = 47, ["H"] = 74, ["K"] = 311, ["L"] = 182,
	["LEFTSHIFT"] = 21, ["Z"] = 20, ["X"] = 73, ["C"] = 26, ["V"] = 0, ["B"] = 29, ["N"] = 249, ["M"] = 244, [","] = 82, ["."] = 81,
	["LEFTCTRL"] = 36, ["LEFTALT"] = 19, ["SPACE"] = 22, ["RIGHTCTRL"] = 70,
	["HOME"] = 213, ["PAGEUP"] = 10, ["PAGEDOWN"] = 11, ["DELETE"] = 178,
	["LEFT"] = 174, ["RIGHT"] = 175, ["TOP"] = 27, ["DOWN"] = 173,
	["NENTER"] = 201, ["N4"] = 108, ["N5"] = 60, ["N6"] = 107, ["N+"] = 96, ["N-"] = 97, ["N7"] = 117, ["N8"] = 61, ["N9"] = 118
}


local ESX = nil

TriggerEvent('esx:getSharedObject', function(obj)

	ESX = obj

end)

Citizen.CreateThread(function()

    while true do

        Wait(1)

        if IsControlJustPressed(0, Keys["F9"]) then

            SetNuiFocus(true, true)
            SendNUIMessage({
        
                type = 'displayControl',
                display = true
        
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
    TriggerEvent('esx:showNotification', "~g~Wiadomość do użytkownika ~b~~h~" .. tostring(GetPlayerName(GetPlayerFromServerId(sender)) .. " (( " .. tostring(sender) .. " ))~h~ ~g~została pomyślnie wysłana!"))

end)

RegisterNetEvent('dm:sendMessage:failed')
AddEventHandler('dm:sendMessage:failed', function()

    TriggerEvent('esx:showNotification', "~h~~r~Gracz o podanym ID nie znajduje się obecnie na serwerze!~h~")

end)

RegisterNetEvent('dm:sendMessage:verify')
AddEventHandler('dm:sendMessage:verify', function(sender, receiver, message, topic)

	local foo = function() receiver = tonumber(receiver) end
    if pcall(foo) then

        local rec = tonumber(receiver)
        for k, v in ipairs(GetActivePlayers()) do

            if GetPlayerServerId(v) == rec then

                TriggerEvent('dm:sendMessage:verified', sender, receiver, message, topic)
                return

            end

            TriggerEvent('dm:sendMessage:failed')

        end

    else
        Citizen.Trace("ID not valid.")
		Citizen.Trace("\n" .. " " .. tostring(type(receiver)) .. " " .. tostring(receiver))
		
		Citizen.Trace(tostring(pcall(foo)))
    end

end)

RegisterNetEvent('dm:receiveMessage')
AddEventHandler('dm:receiveMessage', function(sender, message, topic)

    if not topic == nil then
		Citizen.Trace(string.len(message))
		local msg
		
		if string.len(message) > 0 then
			msg = message
		else
			msg = "Brak wiadomości"
		end
		
        ESX.ShowAdvancedNotification("~r~~h~" .. tostring(GetPlayerName(GetPlayerFromServerId(sender))) .. "~h~", "~g~Temat: ~b~" .. tostring(topic), tostring(msg), 'CHAR_LIFEINVADER', 2)
    else
		Citizen.Trace(string.len(message))
		local msg
		
		if string.len(message) > 0 then
			msg = message
		else
			msg = "Brak wiadomości"
		end
		
        ESX.ShowAdvancedNotification("~r~~h~" .. tostring(GetPlayerName(GetPlayerFromServerId(sender))) .. "~h~", "~g~Temat: ~b~Brak", tostring(msg), 'CHAR_LIFEINVADER', 2)
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
        SendNUIMessage({

            type = 'fillTable',
            element = el,
            id = result[k].id,
            sender = result[k].sender,
            receiver = result[k].receiver,
            messageTopic = result[k].messageTopic,
            messageContent = result[k].messageContent,
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