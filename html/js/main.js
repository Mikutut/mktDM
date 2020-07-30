$(document).ready(() => {

    /* document.body.style.display = "none"; */

    $(function(){

        window.onload = (e) => {

            addEventListener('message', function(event)
            {

                var item = event.data;

                if(item !== undefined)
                {
                    if(item.display === true)
                    {

                        document.body.style.display = "initial";
                        if(item.playerName != null)
                        {

                            document.getElementById("mkt_dm-HeaderPlayerName").innerHTML = item.playerName.toString();

                        }
                        else
                        {

                            document.getElementById("mkt_dm-HeaderPlayerName").style.display = "none";

                        }

                    }
                    else if(item.display === false)
                    {

                        document.body.style.display = "none";

                    }
                }

            });

        }

    })

})