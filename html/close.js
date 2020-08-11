document.addEventListener('keydown', function(event){

    if(event.key === HK_name || event.key == "Escape")
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