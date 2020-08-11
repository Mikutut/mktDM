function returnDateTime(_date)
{

    var date = new Date(_date);
    var dD = date.getDate();
    var dM = date.getMonth() + 1;
    var dY = date.getFullYear();

    var dH = date.getHours();
    var dm = date.getMinutes();

    if(dD < 10)
    {

        dD = "0" + dD.toString();

    }

    if(dM < 10)
    {

        dM = "0" + dM.toString();

    }

    if(dH < 10)
    {

        dH = "0" + dH.toString();

    }

    if(dm < 10)
    {

        dm = "0" + dm.toString();

    }

    datee = dD.toString() + dateSeparator + dM.toString() + dateSeparator + dY.toString() + " " + dH.toString() + ":" + dm.toString();

    return datee;

}