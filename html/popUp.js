function initPopup(_bg, _popUp, _header, _close)
{

    if(_bg !== undefined)
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
        _bg.style.boxSizing = "border-box";
    }

    if(_popUp !== undefined)
    {
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
        _popUp.style.boxSizing = "border-box";
    }

    if(_header !== undefined)
    {
        _header.style.display = "inline-block";
        _header.style.width = "100%";
        _header.style.fontSize = "1.5rem";
        _header.style.fontWeight = "bold";
        _header.style.color = "black";
        _header.style.textAlign = "center";
        _header.style.marginTop = "1rem";
        _header.style.boxSizing = "border-box";
    }

    if(_close !== undefined)
    {

        _close.innerHTML = locale.close;
        _close.style.display = "block";
        _close.style.width = "100%";
        _close.style.backgroundColor = "red";
        _close.style.fontSize = "1.5rem";
        _close.style.textAlign = "center";
        _close.style.color = "white";
        _close.style.border = "none";
        _close.style.outline = "none";
        _close.style.position = "absolute";
        _close.style.bottom = "0";
        _close.style.left = "0";
        _close.style.boxSizing = "border-box";

    }

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

    initPopup(bg, popUp, header, close);

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

    document.body.appendChild(bg);

    close.onclick = function(){ bg.remove(); };

}

function advancedSearchOptionsPopup(windowType)
{

    var bg = document.createElement("div");
    var popUp = document.createElement("div");
    var header = document.createElement("span");
    var options = document.createElement("div");
    var close = document.createElement("button");

    header.innerHTML += locale.advancedSearchBtn;
    popUp.appendChild(header);
    popUp.appendChild(options);
    popUp.appendChild(close);
    bg.appendChild(popUp);

    initPopup(bg, popUp, header, close);

    options.style = "display: flex; flex-flow: column; flex: 0 0 auto; width: 95%; height: 75%; box-sizing: border-box; margin: 1rem auto 0 auto; border: 1px solid #000000; color: black; font-size: 1.5rem;";
    var sortBy = document.createElement("span");
    sortBy.style = "display: flex; flex-flow: row nowrap; flex: 0 0 auto; justify-content: center; vertical-align: middle; width: 100%; clear: both; margin: 0.5rem 0 0 0;";
    
    /* var chkBox = document.createElement("label");
    var chkTick = document.createElement("span");
    var chkInput = document.createElement("input");

    chkBox.className = "mkt_dm-CheckboxContainer";
    chkInput.type = "checkbox";
    chkTick.className = "mkt_dm-CheckboxTick";

    chkBox.appendChild(chkInput);
    chkBox.appendChild(chkTick); */

    var dropdown = document.createElement("div");
    var dropdownContent = document.createElement("div");
    var dpCList = document.createElement("ul");

    dpCList.className = "mkt_dm-DropdownList";

    dropdown.innerHTML = locale.sortBy;
    dropdown.className = "mkt_dm-Dropdown";
    dropdownContent.className = "mkt_dm-DropdownContent";

    for(var i = 1; i <= 4; i++)
    {

        var li = document.createElement("li");
        li.innerHTML = "CHUJ!";
        li.onclick = function()
        {

            dropdownContent.style.display = "none";
            $.post("http://mkt_dm/receivedSortBy", JSON.stringify({ sortby: i.toString() }));

        };
        dpCList.appendChild(li);

    }

    dropdownContent.appendChild(dpCList);

    dropdown.appendChild(dropdownContent);
    
    sortBy.appendChild(dropdown);
    options.appendChild(sortBy);

    document.body.appendChild(bg);

    close.onclick = function(){ bg.remove(); };

}

function iframePopUp(link)
{

    var bg = document.createElement("div");
    var popUp = document.createElement("div");
    var iframe = document.createElement("iframe");
    var close = document.createElement("button");

    popUp.appendChild(iframe);
    popUp.appendChild(close);
    bg.appendChild(popUp);

    initPopup(bg, popUp);

    iframe.style.display = "block";
    iframe.style.width = "100%";
    iframe.style.height = "calc(100% - 1.5rem)";
    iframe.src = link;
    iframe.style.boxSizing = "border-box";
    iframe.style.border = "none";
    iframe.style.margin = "0";
    iframe.style.outline = "0";

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
    close.style.boxSizing = "border-box";

    document.body.appendChild(bg);

    close.onclick = function(){ bg.remove(); };

}