document.addEventListener("keydown", function(e)
{

    if(e.key === "Tab")
    {

        toggleNavBar();

    }

});

function toggleNavBar()
{

    navBarState = !navBarState;

    if(navBarState)
    {

        document.getElementById("mkt_dm-Sidebar").style.left = "0";
        document.getElementById("mkt_dm-SidebarButton").style.left = "10%";
        document.getElementById("mkt_dm-SidebarButton").className = "sideBarOut";

    }
    else
    {

        document.getElementById("mkt_dm-Sidebar").style.left = "calc(-10% - 2px)";
        document.getElementById("mkt_dm-SidebarButton").style.left = "0";
        document.getElementById("mkt_dm-SidebarButton").className = "";

    }

}