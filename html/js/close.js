document.addEventListener('keydown', function(e){

    if(e.key === "Escape")
    {

        closeNUI();

    }

})

function closeNUI()
{

    $.post('http://mkt_dm/exit', JSON.stringify({}));

}