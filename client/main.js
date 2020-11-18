onNet("mktDM:sendDM", async (sender, receiver, topic, message) => {
    for(let player of GetActivePlayers()) {
        if(GetPlayerServerId(player) == receiver) {
            exports.mktNotifs.addNotification("You got a DM!", `You have received a DM!\n\nFrom: ${GetPlayerName(GetPlayerFromServerId(sender))}\nTopic: ${topic}\n\nMessage: ${message}\n\nYou can respond to it using command "/dm ${sender} *message*"`, `info`, receiver);
            return;
        }
    }
    exports.mktNotifs.addNotification("Player not found!", "There aren't any players associated with this ID currently on the server!", "error", sender);
});