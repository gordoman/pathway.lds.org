// JavaScript Document
var drawerOpen = false;

function open_side()
{
	if (!drawerOpen)
	{
		$("#sidebar").addClass('open-mobile');
		$("body").animate({ "left": "-250px" }, "slow" );
		drawerOpen = true;
	}
	else
	{
		$("body").animate({ "left": "0px" }, "slow", function(){
		$("#sidebar").removeClass('open-mobile')
		} );
		drawerOpen = false;
	}
}