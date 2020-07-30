updateClock();

function updateClock()
{

    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    var d = date.getDate();
    var M = date.getMonth();
    var y = date.getFullYear();

    var fullDate;

    var hours, minutes, seconds;

    if(h < 10) { hours = "0" + h.toString() } else { hours = h.toString() };
    if(m < 10) { minutes = "0" + m.toString() } else { minutes = m.toString() };
    if(s < 10) { seconds = "0" + s.toString() } else { seconds = s.toString() };

    if(inverseDate)
    {

        fullDate = (M + 1).toString() + dateSeparator + d.toString() + dateSeparator + y.toString();

    }
    else
    {

        fullDate = d.toString() + dateSeparator + (M + 1).toString() + dateSeparator + y.toString();

    }

    document.getElementById("mkt_dm-HeaderClock").innerHTML = hours + ":" + minutes + ":" + seconds;
    document.getElementById("mkt_dm-HeaderDate").innerHTML = fullDate;

    setTimeout(() => { updateClock(); }, 100);

}