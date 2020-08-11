var Keys = ' {"ESC" : "Escape", "F1": "F1", "F2": "F2", "F3": "F3", "F5": "F5", "F6": "F6", "F7": "F7", "F8": "F8", "F9": "F9", "F10": "F10","~": "`", "1": "1", "2": "2", "3": "3", "4": "4", "5": "5", "6": "6", "7": "7", "8": "8", "9": "9", "-": "-", ":": ":", "=": "=", "BACKSPACE": "Backspace", "TAB": "Tab", "Q": "q", "W": "w", "E": "e", "R": "r", "T": "t", "Y": "y", "U": "u", "P": "p", "[": "[", "]": "]", "ENTER": "Enter", "CAPS": "CapsLock", "A": "a", "S": "s", "D": "d", "F": "f", "G": "g", "H": "h", "K": "k", "L": "l","LEFTSHIFT": "Shift", "Z": "z", "X": "x", "C": "c", "V": "v", "B": "b", "N": "n", "M": "m", ",": ",", ".": ".","LEFTCTRL": "Control", "LEFTALT": "Alt", "SPACE": " ", "RIGHTCTRL": "Control", "HOME": "Home", "PAGEUP": "PageUp", "PAGEDOWN": "PageDown", "DELETE": "Delete", "LEFT": "ArrowLeft", "RIGHT": "ArrowRight", "TOP": "ArrowUp", "DOWN": "ArrowDown", "NENTER": "Enter", "N4": "4", "N5": "5", "N6": "6", "N+": "+", "N-": "-", "N7": "7", "N8": "8", "N9": "9"} ';

function setHotkey(_key)
{
    
    var keysKeys = Object.keys(JSON.parse(Keys));
    for(var i = 0; i < keysKeys.length; i++)
    {

        if(keysKeys[i] === _key)
        {

            var keysValues = Object.values(JSON.parse(Keys));
            HK_name = keysValues[i];
            break;

        }
        else
        {

            continue;

        }

    }


}