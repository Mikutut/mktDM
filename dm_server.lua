RegisterServerEvent('dm:sendMessage')
AddEventHandler('dm:sendMessage', function(sender, receiver, message, topic)

    if not topic == nil then
        MySQL.ready(function()
        
            MySQL.Async.execute('INSERT INTO `mkt_dm` (`sender`, `receiver`, `messageTopic`, `messageContent`) VALUES (@sender, @receiver, @messageTopic, @messageContent)', 
            {

                ['sender'] = GetPlayerName(sender),
                ['receiver'] = GetPlayerName(receiver),
                ['messageTopic'] = topic,
                ['messageContent'] = message

            }, function(affectedRows)
            
                TriggerClientEvent('dm:receiveMessage', receiver, sender, message, topic)

            end)

        end)
    else

        MySQL.ready(function()
        
            MySQL.Async.execute('INSERT INTO `mkt_dm` ( `sender`, `receiver`, `messageContent` ) VALUES (@sender, @receiver, @messageContent)', {

                ['sender'] = GetPlayerName(sender),
                ['receiver'] = GetPlayerName(receiver),
                ['messageContent'] = message

            }, function(affectedRows)
            
                TriggerClientEvent('dm:receiveMessage', receiver, sender, message)
            
            end)
        
        end)
    end

end)

RegisterCommand("dm", function(source, args)

    if #args > 0 then
        local receiver = args[1]
        table.remove(args, 1)
        local message = table.concat(args, " ")
        TriggerClientEvent('dm:sendMessage:verify', source, source, receiver, message, nil)
    else
        print('^4Argument mismatch!^7');
    end

end, false)

--------------------------------------------------------------------------
-- UI RELATED EVENTS, DON'T TOUCH --

RegisterServerEvent('dm:fetchReceived')
AddEventHandler('dm:fetchReceived', function(src, lB, el)

    if lB ~= "noLimit" then


        MySQL.Async.fetchAll('SELECT * FROM `mkt_dm` WHERE `receiver` = @receiver ORDER BY `id` ASC', {

            ['receiver'] = GetPlayerName(src)

        }, function(result)
            
            local limit = tonumber(lB)
            local res = {}

            for i = 1, limit, 1 do

                if #result >= i then
                    res[i] = result[i]
                end

            end
            
            TriggerClientEvent('dm:fetchReceived:Client', src, res, el)
        
        end)
        
    
    else

        MySQL.ready(function()
        
            MySQL.Async.fetchAll('SELECT * FROM `mkt_dm` WHERE `receiver` = @receiver ORDER BY `id` ASC', {

                ['receiver'] = GetPlayerName(src)

            }, function(result)
            

                TriggerClientEvent('dm:fetchReceived:Client', src, result, el)
            
            end)
        
        end)

    end

end)