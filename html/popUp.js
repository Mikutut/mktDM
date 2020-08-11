function initPopup(_bg, _popUp, _header)
{

    _bg.style.display = "block";
    _bg.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    _bg.style.zIndex = "99999";
    _bg.style.position = "fixed";
    _bg.style.top = "0";
    _bg.style.left = "0";
    _bg.style.width = "100%";
    _bg.style.height = "100%";
    _bg.style.border = "none";
    _bg.style.outline = "none";

    _popUp.style.display = "block";
    _popUp.style.backgroundColor = "white";
    _popUp.style.width = "60%";
    _popUp.style.height = "50%";
    _popUp.style.position = "fixed";
    _popUp.style.transform = "translate(-50%, -50%)";
    _popUp.style.top = "50%";
    _popUp.style.left = "50%";
    _popUp.style.border = "none";
    _popUp.style.outline = "none";

    _header.style.display = "inline-block";
    _header.style.width = "100%";
    _header.style.fontSize = "1.5rem";
    _header.style.fontWeight = "bold";
    _header.style.color = "black";
    _header.style.textAlign = "center";
    _header.style.marginTop = "1rem";

}

function sendDMPopup(label)
{

    var bg = document.createElement("div");
    var popUp = document.createElement("div");
    var header = document.createElement("span");

    header.innerHTML += label;
    popUp.appendChild(header);
    bg.appendChild(popUp);

    initPopup(bg, popUp, header);

    header.style.marginTop = "0";
    header.style.position = "absolute";
    header.style.top = "50%";
    header.style.left = "0";
    header.style.transform = "translateY(-50%)";

    document.body.appendChild(bg);

    setTimeout(() => { bg.remove(); }, 3000);

}

function receivedDivPopup(_sender, _receiver, _topic, _message, _date, _element)
{

    datee = returnDateTime(_date);


    var bg = document.createElement("div");
    var popUp = document.createElement("div");
    var header = document.createElement("span");
    var header2 = document.createElement("div");
    var message = document.createElement("textarea");
    var close = document.createElement("button");

    header.innerHTML += locale.showMsg;
    header2.innerHTML += "<span style=\"display: inline-block; width: 100%; margin-top: 0.5rem; text-align: center; color: black; font-size: 1rem; font-weight: bold; box-sizing: border-box;\">" + locale.msgSender + ": " + _sender + "</span>"; 
    header2.innerHTML += "<span style=\"display: inline-block; width: 100%; margin-top: 0.5rem; text-align: center; color: black; font-size: 1rem; font-weight: bold; box-sizing: border-box;\">" + locale.msgReceiver + ": " + _receiver + "</span>";
    header2.innerHTML += "<span style=\"display: inline-block; width: 100%; margin-top: 0.5rem; text-align: center; color: black; font-size: 1rem; font-weight: bold; box-sizing: border-box;\">" + locale.dateSent + ": " + datee + "</span>";
    header2.innerHTML += "<span style=\"display: inline-block; width: 100%; margin-top: 0.5rem; text-align: center; color: black; font-size: 1rem; font-weight: bold; box-sizing: border-box;\">" + locale.msgTopic + ": " + _topic + "</span>";  
    header2.innerHTML += "<span style=\"display: inline-block; width: 100%; margin-top: 0.5rem; text-align: center; color: black; font-size: 1rem; font-weight: bold; box-sizing: border-box;\">" + locale.msgContent + ": " + "</span>";
    if(_message === "^^^NO_MSG^^^") _message = locale.noMessage;
    if(_topic === "^^^NO_TOPIC^^^") _topic = locale.noTopic;

    message.innerHTML += _message;
    popUp.appendChild(header);
    popUp.appendChild(header2);
    header2.appendChild(message);
    popUp.appendChild(close);
    bg.appendChild(popUp);

    initPopup(bg, popUp, header);

    header2.style.display = "block";
    header2.style.width = "100%";
    header2.style.border = "none";
    header2.style.outline = "none";
    header2.style.marginTop = "1rem";
    header2.style.boxSizing = "border-box";

    message.style.display = "block";
    message.style.width = "90%";
    message.style.padding = "0.5rem";
    message.style.overflowX = "hidden";
    message.style.overflowY = "auto";
    message.style.wordWrap = "normal";
    message.style.color = "black";
    message.style.fontSize = "1rem";
    message.style.fontFamily = "Roboto, sans-serif";
    message.style.textAlign = "justify";
    message.style.border = "1px solid #000";
    message.style.outline = "none";
    message.readOnly = true;
    message.style.resize = "none";
    message.style.margin = "0.5rem auto 0 auto";
    message.style.boxSizing = "border-box";

    close.innerHTML = locale.close;
    close.style.display = "block";
    close.style.width = "100%";
    close.style.backgroundColor = "red";
    close.style.fontSize = "1.5rem";
    close.style.textAlign = "center";
    close.style.color = "white";
    close.style.border = "none";
    close.style.outline = "none";
    close.style.position = "absolute";
    close.style.bottom = "0";
    close.style.left = "0";

    document.body.appendChild(bg);

    close.onclick = function(){ bg.remove(); };

}

function advancedSearchOptionsPopup(windowType)
{

    var bg = document.createElement("div");
    var popUp = document.createElement("div");
    var header = document.createElement("span");
    var close = document.createElement("button");

    header.innerHTML += "Wyświetl wiadomość";
    popUp.appendChild(header);
    bg.appendChild(popUp);

    initPopup(bg, popUp, header);

    if(windowType === "received")
    {

        popUp.style.backgroundColor = document.getElementById("mkt_dm-ReceivedDiv").style.backgroundColor;

    }
    else if(windowType === "sent")
    {

        popUp.style.backgroundColor = document.getElementById("mkt_dm-SentDiv").style.backgroundColor;

    }

    document.body.appendChild(bg);

}