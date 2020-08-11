function closeNUI()
{

    setMainElement('hideAll');
    navBarState = true;
    toggleNavBar();
    $.post('http://mkt_dm/exit', JSON.stringify({}));

}