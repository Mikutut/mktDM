document.addEventListener('keydown', function(e){

    if(e.key === HK_name)
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