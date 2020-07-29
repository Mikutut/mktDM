function setMainElement(id)
{

    document.getElementById("mkt_dm-MainDiv").style.display = "block";

    switch(id)
    {

        case 1:

            document.getElementById("mkt_dm-ReceivedDiv").style.display = "block";
            document.getElementById("mkt_dm-SentDiv").style.display = "none";
            document.getElementById("mkt_dm-SendDMDiv").style.display = "none";

        break;

        case 2:

            document.getElementById("mkt_dm-ReceivedDiv").style.display = "none";
            document.getElementById("mkt_dm-SentDiv").style.display = "block";
            document.getElementById("mkt_dm-SendDMDiv").style.display = "none";

        break;

        case 3:

            document.getElementById("mkt_dm-ReceivedDiv").style.display = "none";
            document.getElementById("mkt_dm-SentDiv").style.display = "none";
            document.getElementById("mkt_dm-SendDMDiv").style.display = "block";

        break;

        case 'hideAll':

            document.getElementById("mkt_dm-ReceivedDiv").style.display = "none";
            document.getElementById("mkt_dm-SentDiv").style.display = "none";
            document.getElementById("mkt_dm-SendDMDiv").style.display = "none";
            document.getElementById("mkt_dm-MainDiv").style.display = "none";

            toggleNavBar();

        break;

    }

}