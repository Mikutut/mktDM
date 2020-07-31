$(document).ready(() => {

    document.body.style.display = "none";

    $(function(){

        window.onload = (e) => {

            addEventListener('message', function(event)
            {

                var item = event.data;

                if(item !== undefined)
                {
                    
                    switch(item.type)
                    {

                        case 'displayControl':

                            if(item.display === true)
                            {

                                document.body.style.display = "initial";

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
                                $("#mkt_dm-ReceivedTable").find("tbody").append("<tr><td>" + item.id +"</td><td>" + item.sender + "</td><td>" + item.messageTopic + "</td></tr>");
                            }
                            else if(item.element === "sent")
                            {

                                $("#mkt_dm-SentTable").find("tbody").append("<tr><td>" + item.id + "</td><td>" + item.receiver + "</td><td>" + item.messageTopic + "</td></tr>");

                            }

                        break;

                    }

                }

            });

        }

    })

})