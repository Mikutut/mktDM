document.getElementById("mkt_dm-ReceivedMsgCount").addEventListener('change', function(e){

    receivedFetch();

});

document.getElementById("mkt_dm-SentMsgCount").addEventListener('change', function(e){


    sentFetch();

});

function receivedFetch()
{

    var limit = document.getElementById("mkt_dm-ReceivedMsgCount").value;

    var json = { limitBy: limit, element: "received" };

    $.post('http://mkt_dm/fetchreceived', JSON.stringify(json) );

}

function sentFetch()
{

    var limit = document.getElementById("mkt_dm-SentMsgCount").value;

    var json = { limitBy: limit, element: "sent" };

    $.post('http://mkt_dm/fetchreceived', JSON.stringify(json));

}

function setMainElement(id)
{

    switch(id)
    {

        case 1:

            receivedFetch();

            document.getElementById("mkt_dm-MainDiv").style.display = "block";

            document.getElementById("mkt_dm-ReceivedDiv").style.display = "block";
            document.getElementById("mkt_dm-SentDiv").style.display = "none";
            document.getElementById("mkt_dm-SendDMDiv").style.display = "none";
            document.getElementById("mkt_dm-InfoDiv").style.display = "none";

            toggleNavBar();

        break;

        case 2:

            sentFetch();

            document.getElementById("mkt_dm-MainDiv").style.display = "block";

            document.getElementById("mkt_dm-ReceivedDiv").style.display = "none";
            document.getElementById("mkt_dm-SentDiv").style.display = "block";
            document.getElementById("mkt_dm-SendDMDiv").style.display = "none";
            document.getElementById("mkt_dm-InfoDiv").style.display = "none";

            toggleNavBar();

        break;

        case 3:

            document.getElementById("mkt_dm-MainDiv").style.display = "block";

            document.getElementById("mkt_dm-ReceivedDiv").style.display = "none";
            document.getElementById("mkt_dm-SentDiv").style.display = "none";
            document.getElementById("mkt_dm-SendDMDiv").style.display = "block";
            document.getElementById("mkt_dm-InfoDiv").style.display = "none";

            toggleNavBar();

        break;

        case 4:

            document.getElementById("mkt_dm-MainDiv").style.display = "block";

            document.getElementById("mkt_dm-ReceivedDiv").style.display = "none";
            document.getElementById("mkt_dm-SentDiv").style.display = "none";
            document.getElementById("mkt_dm-SendDMDiv").style.display = "none";
            document.getElementById("mkt_dm-InfoDiv").style.display = "block";

            toggleNavBar();

        break;

        case 'hideAll':

            document.getElementById("mkt_dm-ReceivedDiv").style.display = "none";
            document.getElementById("mkt_dm-SentDiv").style.display = "none";
            document.getElementById("mkt_dm-SendDMDiv").style.display = "none";
            document.getElementById("mkt_dm-InfoDiv").style.display = "none";

            document.getElementById("mkt_dm-MainDiv").style.display = "none";

            toggleNavBar();

        break;

    }

}