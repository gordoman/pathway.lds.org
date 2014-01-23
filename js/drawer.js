// JavaScript Document
var drawerOpen = false;

function open_side()
{
	if (!drawerOpen)
	{
		$("#sidebar").addClass('open-mobile');
		$("body").animate({ "left": "-250px" }, "slow" , function(){
			drawerOpen = true;
			$("#arrow-icon").addClass('inverse');
		});
		$('ul.drop-down li').each(function (){
			$(this).attr('onclick', "open_side()");
			});
	}
	else
	{
		$("body").animate({ "left": "0px" }, "slow", function(){
		$("#sidebar").removeClass('open-mobile');
		$("#arrow-icon").removeClass('inverse');
		} );
		$('.drop-down li').each(function (){
			$(this).attr('onclick'," ");
			});
		drawerOpen = false;
	}
}

$(document).ready(function() {
	var main_height = $("#main-container").height();
	var sidebar_height = $(".pf-sidebar").height();
	//var diffheight = main_height-sidebar_height
	//$("#sidebar").css("padding-bottom", diffheight);
	$("#sidebar").css("height", main_height);
});