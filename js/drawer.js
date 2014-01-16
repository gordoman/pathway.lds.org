// JavaScript Document
$(document).ready(function() {

	
	
})

var drawerOpen = false;

function open_side()
{
	if (!drawerOpen)
	{
		$("#sidebar").css("display","block");
		$("body").css("left","-250px");
		drawerOpen = true;
	}
	else
	{
		$("#sidebar").css("display","none");
		$("body").css("left","0px");
		drawerOpen = false;
	}
}