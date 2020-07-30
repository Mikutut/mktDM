function tryToNumber(num)

    return tonumber(num)

end

RegisterServerEvent('dm:sendMessage')
AddEventHandler('dm:sendMessage', function(sender, receiver, text)


end)

RegisterCommand("dm", function(source, args)

    local sender = source
    local receiver = args[1]

    if pcall(tryToNumber(receiver)) then

    else

    end

end, false)