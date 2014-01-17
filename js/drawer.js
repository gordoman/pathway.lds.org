// JavaScript Document
var drawerOpen = false;

function open_side()
{
	if (!drawerOpen)
	{
		$("#sidebar").css("display","block");
		$("body").animate({ "left": "-250px" }, "slow" );
		drawerOpen = true;
	}
	else
	{
		$("body").animate({ "left": "0px" }, "slow", function(){
		$("#sidebar").css("display","none");
		} );
		drawerOpen = false;
	}
}