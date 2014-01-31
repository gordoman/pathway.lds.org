/***** Sidebar & Mobile Side Drawer Javascript *****/

//Sets the height of the sidebar to the height of the body content page load.
$(document).ready(function() {
	var main_height = $("#main-container").height();
	var sidebar_height = $(".pf-sidebar").height();
	$("#sidebar").css("height", main_height);
});


//Script for opening and closing the sidebar on mobile.
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
			
		$('.jump_anchor').each(function (){
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
		$('.jump_anchor').each(function (){
			$(this).attr('onclick'," ");
			});
			
		drawerOpen = false;
	}
}

//Sticky sidebar
$(document).ready(function() {
	$(window).bind("scroll", function(){
		var scrollTop = $(window).scrollTop();
		if (scrollTop > 220)
		{
			$("#sideNav").css('position','fixed');
			$("#sideNav").css('top','0');
		}
		else
		{
			$("#sideNav").css('position','inherit');
			$("#sideNav").css('top','0');
		}
		
	});
});
