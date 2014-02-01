/***** Sidebar & Mobile Side Drawer Javascript *****/

//Sets the height of the sidebar to the height of the body content page load.
$(window).load(function() {
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
		var sidebar_height = $(".pf-sidebar").height();
		$("#sidebar").css("height", main_height);
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
		if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {

		// Assign the Width of the UL to that of the #sideNav div 
		// (page width breaks on fixed declaration)
		$('ul.pf-sidenav').width($('#sideNav').outerWidth());
		var scrollTop = $(window).scrollTop();
		var bottomTrigger = $(document).height() - 131 - $(window).height();

		if (scrollTop < 220)
		{
			$("#sideNav").css('position','inherit');
			$("#sideNav").css('top','0');
			$("#sidebar .sidebar-caret").css('left','-54px');
			$("#sidebar .sidebar-caret.pos1").css('top','-2px');
			$("#sidebar .sidebar-caret.pos2").css('top','60px');
		}
		else if (scrollTop > 220 && scrollTop < bottomTrigger)
		{
			$("#sideNav").css('position','fixed');
			$("#sideNav").css('top','0');
			$("#sidebar .sidebar-caret").css('left','-54px');
			$("#sidebar .sidebar-caret.pos1").css('top','17px');
			$("#sidebar .sidebar-caret.pos2").css('top','79px');
		}
		else
		{
			$("#sideNav").css('position','absolute');
			$("#sideNav").css('bottom','0');
			$("#sideNav").css('margin-bottom','65px');
			$("#sideNav").css('top','inherit');
			$("#sidebar .sidebar-caret").css('left','-54px');
			$("#sidebar .sidebar-caret.pos1").css('top','15px');
			$("#sidebar .sidebar-caret.pos2").css('top','60px');
		}
	}
});
});
