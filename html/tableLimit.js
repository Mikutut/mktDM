document.getElementById("mkt_dm-ReceivedMsgCount").addEventListener('onchange', function(e){

    receivedTableLimit();

});

function receivedTableLimit()
{

    var val = document.getElementById("mkt_dm-ReceivedMsgCount").value;
    val = parseInt(val, 10);

    setMainElement(1);

}