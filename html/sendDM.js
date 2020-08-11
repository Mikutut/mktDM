function verifyInput()
{

    var _receiver = document.getElementsByName("receiver")[0];
    var _message = document.getElementsByName("messageContent")[0];
    var _topic = document.getElementsByName("topic")[0];

    if(_receiver.value.length == 0)
    {

        sendDMPopup(locale.sendDMIDEmpty);

    }
    else
    {

        _receiver = _receiver.value;
        if(isNaN(parseInt(_receiver)))
        {

            sendDMPopup(locale.sendDMIDInvalid);

        }
        else
        {
            if(_topic.value.length == 0) {_topic = "^^^NO_TOPIC^^^"} else {_topic = _topic.value};
            if(_message.value.length == 0) {_message = "^^^NO_MSG^^^"} else {_message = _message.value};
            
            closeNUI();
            $.post("http://mkt_dm/sendmessage", JSON.stringify({ receiver: _receiver, message: _message, topic: _topic }));
        }

    }

}