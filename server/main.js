const Wait = (ms) => new Promise(res => setTimeout(res, ms));
const generateHorizontalLine = (length) => {
    let hr = "-";
    let chars = " ";
    for(let i = 0; i < length; i++) {
        chars = chars.concat(hr);
    }
    return chars;
};

on("onResourceStart", async (resName) => {
    if(GetCurrentResourceName() === resName) {
        let version = GetResourceMetadata("mktDM", "version", 0);
        print("\n");
        print(`^5${generateHorizontalLine(40)}^7`);
        print("^5\tmktDM^7");
        print(`^5\tVersion ${version}^7`);
        print(`^5\tby Mikut, 2020-2020^7`);
        print(`^5${generateHorizontalLine(40)}^7`);
        print("\n");
        print("^2[mktDM | SUCCESS] mktDM has been successfully initialized!^7");
        print("\n");
    } else return;
});

RegisterCommand("dm", async (source, args) => {
    if(source > 0) {
        let receiver = args[0];
        args.shift();
        let message = args.join(" ");
        if(isNaN(parseInt(receiver, 10))) {
            exports.mktNotifs.addNotification(`ID is incorrect!`, `Provided ID is incorrect! Correct it and try again!`, `error`, source);
        }
        else {
            emitNet("mktDM:sendDM", -1, source, receiver, "", message);
        }
    }
    else {
        print("\n");
        print(`^1[mktDM | WARNING] This command cannot be executed through server console or RCON console!^7`);
        print("\n");
    }
}, false);