const Wait = (ms) => new Promise(res => setTimeout(res, ms));

on("onClientResourceStart", async (resName) => {
    if(GetCurrentResourceName() === resName) {
        print("\n");
        print("^6mktDM^7");
        print("\n");
        print("^6Version 0.1-prerelease^7");
        print("\n");
        print("^6mktDM has been successfully initialized!^7");
        print("\n");
    } else return;
});