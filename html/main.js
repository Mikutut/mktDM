$(document).ready(() => {

    document.body.style.display = "none";

    window.onload = (e) => {

        addEventListener('message', function(event)
        {

            var item = event.data;

            if(item !== undefined)
            {
                
                switch(item.type)
                {

                    case 'changeLocale':

                        setLocale(item.locale);

                    break;
                    case 'displayControl':

                        if(item.display === true)
                        {

                            document.body.style.display = "initial";

                            /* setHotkey(item.hotkey); */

                            document.getElementById("mkt_dm-Controls").innerHTML = locale.closePanel + " [ " + HK_name + " ]";
                            document.querySelector(".mkt_dm-SidebarElement:nth-child(1)").innerHTML = locale.received;
                            document.querySelector(".mkt_dm-SidebarElement:nth-child(2)").innerHTML = locale.sent;
                            document.querySelector(".mkt_dm-SidebarElement:nth-child(3)").innerHTML = locale.sendDM;
                            document.querySelector(".mkt_dm-SidebarElement:nth-child(4)").innerHTML = locale.info;
                            document.querySelector(".mkt_dm-SidebarElement:nth-child(5)").innerHTML = locale.hideAll;

                            document.querySelector("#mkt_dm-ReceivedDiv > span.mkt_dm-MainElementTitle").innerHTML = locale.received;
                            document.querySelector("#mkt_dm-ReceivedDiv > span:not(.mkt_dm-MainElementTitle) > label[for=\"mkt_dm-ReceivedMsgCount\"]").innerHTML = locale.showLimit1 + ": ";
                            document.querySelector("#mkt_dm-ReceivedDiv > span:not(.mkt_dm-MainElementTitle) > span").innerHTML = " " + locale.showLimit2 + ".";

                            document.querySelector("#mkt_dm-ReceivedTable > thead > tr > td:nth-child(1)").innerHTML = locale.dateSentInTable;
                            document.querySelector("#mkt_dm-ReceivedTable > thead > tr > td:nth-child(2)").innerHTML = locale.msgSender;
                            document.querySelector("#mkt_dm-ReceivedTable > thead > tr > td:nth-child(3)").innerHTML = locale.msgTopic;

                            document.querySelector("#mkt_dm-SentDiv > span.mkt_dm-MainElementTitle").innerHTML = locale.sent;
                            document.querySelector("#mkt_dm-SentDiv > span:not(.mkt_dm-MainElementTitle) > label[for=\"mkt_dm-SentMsgCount\"]").innerHTML = locale.showLimit1 + ": ";
                            document.querySelector("#mkt_dm-SentDiv > span:not(.mkt_dm-MainElementTitle) > span").innerHTML = " " + locale.showLimit2 + ".";

                            document.querySelector("#mkt_dm-SentTable > thead > tr > td:nth-child(1)").innerHTML = locale.dateSentInTable;
                            document.querySelector("#mkt_dm-SentTable > thead > tr > td:nth-child(2)").innerHTML = locale.msgReceiver;
                            document.querySelector("#mkt_dm-SentTable > thead > tr > td:nth-child(3)").innerHTML = locale.msgTopic;

                            document.querySelector("#mkt_dm-SendDMDiv > span.mkt_dm-MainElementTitle").innerHTML = locale.sendDM;
                            document.querySelector("#mkt_dm-SendDMForm > label[for=\"receiver\"").innerHTML = locale.msgReceiver;
                            document.querySelector("#mkt_dm-SendDMForm > label[for=\"topic\"").innerHTML = locale.msgTopic;
                            document.querySelector("#mkt_dm-SendDMForm > input[name=\"topic\"").setAttribute("placeholder", "(" + locale.optional + ")");
                            document.querySelector("#mkt_dm-SendDMForm > label[for=\"messageContent\"").innerHTML = locale.msgContent;
                            document.querySelector("#mkt_dm-SendDMForm > textarea[name=\"messageContent\"").setAttribute("placeholder", "(" + locale.optional + ")");

                            document.querySelector("#mkt_dm-InfoDiv > span.mkt_dm-MainElementTitle").innerHTML = locale.info;

                            if(item.openDiv !== undefined)
                            {

                                navBarState = true;
                                setMainElement(item.openDiv);

                            }

                        }
                        else
                        {

                            document.body.style.display = "none";

                        }

                    break;

                    case 'playerName':

                        if(item.playerName != null)
                        {

                            document.getElementById("mkt_dm-HeaderPlayerName").innerHTML = item.playerName;

                        }
                        else
                        {

                            document.getElementById("mkt_dm-HeaderPlayerName").style.display = none;

                        }

                    break;

                    case 'changeLimit':

                        if(item.element === "received")
                        {

                            $("#mkt_dm-ReceivedTable").find("tbody").html("");

                        }
                        else if(item.element === "sent")
                        {

                            $("#mkt_dm-SentTable").find("tbody").html("");

                        }

                    break;

                    case 'fillTable':

                        if(item.element === "received")
                        {                

                            /* var line = '<tr><td>' + item.sender + '</td><td>' + item.messageTopic + '</td><td class="showMsgButton"><span class="showMsgBtn" data-sender="' + item.sender + '" data-receiver="' + item.receiver + '" data-topic="' + item.messageTopic + '" data-msg="' + item.messageContent + '" data-date="' + item.messageDate + '">Wyświetl wiadomość</button></td></tr>';
                            $("#mkt_dm-ReceivedTable").find("tbody").append(line);

                            $(".showMsgBtn").on("click", function(){

                                receivedDivPopup($(this).data("sender"), $(this).data("receiver"), $(this).data("topic"), $(this).data("msg"), $(this).data("date"));

                            }); */

                            var table = document.getElementById("mkt_dm-ReceivedTable").tBodies[0];

                            var row = document.createElement("tr");
                            var date = document.createElement("td");
                            var sender = document.createElement("td");
                            var topic = document.createElement("td");
                            var lastCol = document.createElement("td");
                            var btn = document.createElement("span");

                            if(item.messageContent === "^^^NO_MSG^^^") item.messageContent = locale.noMessage;
                            if(item.messageTopic === "^^^NO_TOPIC^^^") item.messageTopic = locale.noTopic;

                            date.innerHTML = returnDateTime(item.messageDate);
                            sender.innerHTML = item.sender;
                            topic.innerHTML = item.messageTopic;
                            lastCol.className = "showMsgBtn";

                            btn.className = "showMsgBtn";
                            btn.innerHTML = locale.showMsg;
                            btn.onclick = function(){ receivedDivPopup(item.sender, item.receiver, item.messageTopic, item.messageContent, item.messageDate, item.element); };

                            lastCol.appendChild(btn);

                            row.appendChild(date);
                            row.appendChild(sender);
                            row.appendChild(topic);
                            row.appendChild(lastCol);

                            table.appendChild(row);


                        }
                        else if(item.element === "sent")
                        {

                            var table = document.getElementById("mkt_dm-SentTable").tBodies[0];

                            var row = document.createElement("tr");
                            var date = document.createElement("td");
                            var sender = document.createElement("td");
                            var topic = document.createElement("td");
                            var lastCol = document.createElement("td");
                            var btn = document.createElement("span");

                            if(item.messageContent === "^^^NO_MSG^^^") item.messageContent = locale.noMessage;
                            if(item.messageTopic === "^^^NO_TOPIC^^^") item.messageTopic = locale.noTopic;

                            date.innerHTML = returnDateTime(item.messageDate);
                            sender.innerHTML = item.sender;
                            topic.innerHTML = item.messageTopic;
                            lastCol.className = "showMsgBtn";

                            btn.className = "showMsgBtn";
                            btn.innerHTML = locale.showMsg;
                            btn.onclick = function(){ receivedDivPopup(item.sender, item.receiver, item.messageTopic, item.messageContent, item.messageDate, item.element); };

                            lastCol.appendChild(btn);

                            row.appendChild(date);
                            row.appendChild(sender);
                            row.appendChild(topic);
                            row.appendChild(lastCol);

                            table.appendChild(row);

                        }

                    break;

                    default:
                        console.log("mkt_dm - Console: It looks like developer has provided invalid NUI operation type. Report this to the developer!\n");

                }

            }

        });

    }

});