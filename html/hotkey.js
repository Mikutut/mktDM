/* var Keys = ' {"ESC" : "Escape", "F1": "F1", "F2": "F2", "F3": "F3", "F5": "F5", "F6": "F6", "F7": "F7", "F8": "F8", "F9": "F9", "F10": "F10","~": "Backquote", "1": "Digit1", "2": "Digit2", "3": "Digit3", "4": "Digit4", "5": "Digit5", "6": "Digit6", "7": "Digit7", "8": "Digit8", "9": "Digit9", "-": "Minus", ":": "Semicolon", "=": "Equal", "BACKSPACE": "Backspace", "TAB": "Tab", "Q": "KeyQ", "W": "KeyW", "E": "KeyE", "R": "KeyR", "T": "KeyT", "Y": "KeyY", "U": "KeyU", "P": "KeyP", "[": "BracketLeft", "]": "BracketRight", "ENTER": "Enter", "CAPS": "CapsLock", "A": "KeyA", "S": "KeyS", "D": "KeyD", "F": "KeyF", "G": "KeyG", "H": "KeyH", "K": "KeyK", "L": "KeyL","LEFTSHIFT": "ShiftLeft", "Z": "KeyZ", "X": "KeyX", "C": "KeyC", "V": "KeyV", "B": "KeyB", "N": "KeyN", "M": "KeyM", ",": "Comma", ".": "Period","LEFTCTRL": "ControlLeft", "LEFTALT": "AltLeft", "SPACE": "Space", "RIGHTCTRL": "ControlRight", "HOME": "Home", "PAGEUP": "PageUp", "PAGEDOWN": "PageDown", "DELETE": "Delete", "LEFT": "ArrowLeft", "RIGHT": "ArrowRight", "TOP": "ArrowUp", "DOWN": "ArrowDown", "NENTER": "NumpadEnter", "N4": "Numpad4", "N5": "Numpad5", "N6": "Numpad6", "N+": "NumpadPlus", "N-": "NumpadMinus", "N7": "Numpad7", "N8": "Numpad8", "N9": "Numpad9"} ';

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


} */

HK_name = "F9";