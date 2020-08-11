RegisterServerEvent('dm:sendMessage')
AddEventHandler('dm:sendMessage', function(sender, receiver, message, topic)

    if topic ~= nil then
        MySQL.ready(function()
        
            MySQL.Async.execute('INSERT INTO `mkt_dm` (`sender`, `senderIdentifier`, `receiver`, `receiverIdentifier`, `messageTopic`, `messageContent`) VALUES (@sender, @senderSteam, @receiver, @receiverSteam, @messageTopic, @messageContent)', 
            {

                ['sender'] = GetPlayerName(sender),
                ['senderSteam'] = GetPlayerIdentifiers(sender)[1],
                ['receiver'] = GetPlayerName(receiver),
                ['receiverSteam'] = GetPlayerIdentifiers(receiver)[1],
                ['messageTopic'] = topic,
                ['messageContent'] = message

            }, function(affectedRows)
            
                TriggerClientEvent('dm:receiveMessage', receiver, sender, topic)

            end)

        end)
    else

        MySQL.ready(function()
        
            MySQL.Async.execute('INSERT INTO `mkt_dm` ( `sender`, `senderIdentifier`, `receiver`, `receiverIdentifier`, `messageContent` ) VALUES (@sender, @senderSteam, @receiver, @receiverSteam, @messageContent)', {

                ['sender'] = GetPlayerName(sender),
                ['senderSteam'] = GetPlayerIdentifiers(sender)[1],
                ['receiver'] = GetPlayerName(receiver),
                ['receiverSteam'] = GetPlayerIdentifiers(sender)[1],
                ['messageContent'] = message

            }, function(affectedRows)
            
                TriggerClientEvent('dm:receiveMessage', receiver, sender)
            
            end)
        
        end)
    end

end)

RegisterCommand("dm", function(source, args)

    if #args > 0 then
        local receiver = args[1]
        table.remove(args, 1)
        local message = table.concat(args, " ")
        if message == nil or message == " " then message = "^^^NO_MSG^^^" end
        local exec = tostring(1)
        TriggerClientEvent('dm:sendMessage:verify', source, source, receiver, message, "^^^NO_TOPIC^^^", exec)
    else
        print('^4Argument mismatch!^7');
    end

end, false)

--------------------------------------------------------------------------
-- UI RELATED EVENTS, DON'T TOUCH --

RegisterServerEvent('dm:fetchReceived')
AddEventHandler('dm:fetchReceived', function(src, lB, el)

    if lB ~= "-1" then


        MySQL.Async.fetchAll('SELECT * FROM `mkt_dm` WHERE `receiverIdentifier` = @receiverSteam ORDER BY `messageDate` DESC', {

            ['receiverSteam'] = GetPlayerIdentifiers(src)[1]

        }, function(result)
            
            local limit = tonumber(lB)
            local res = {}

            for i = 1, limit, 1 do

                res[i] = result[i]

            end
            
            TriggerClientEvent('dm:fetchReceived:Client', src, res, el)
        
        end)
        
    
    else

        MySQL.ready(function()
        
            MySQL.Async.fetchAll('SELECT * FROM `mkt_dm` WHERE `receiverIdentifier` = @receiverSteam ORDER BY `messageDate` DESC', {

                ['receiverSteam'] = GetPlayerIdentifiers(src)[1]

            }, function(result)

                TriggerClientEvent('dm:fetchReceived:Client', src, result, el)
            
            end)
        
        end)

    end

end)