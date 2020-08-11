document.addEventListener('keydown', function(event){

    if(event.key === "Tab")
    {

        event.preventDefault();

    }

    if(document.querySelectorAll("input:focus").length == 0 && document.querySelectorAll("textarea:focus").length == 0)
    {

        if(event.key === HK_name || event.key == "Escape")
        {

            closeNUI();
            event.preventDefault();

        }
        else if(event.key === "Tab")
        {

            toggleNavBar();
            event.preventDefault();

        }
        event.preventDefault();

    }   

})