document.addEventListener('keydown', function(e){

    if(e.key === "Escape" || e.key === "F9")
    {

        closeNUI();

    }

})

function closeNUI()
{

    setMainElement('hideAll');
    navBarState = true;
    toggleNavBar();
    $.post('http://mkt_dm/exit', JSON.stringify({}));

}