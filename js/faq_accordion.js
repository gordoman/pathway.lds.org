//Collapse all the faqs on pageload
$(document).ready(function() {
	$('.collapsible').each(function (){
		$(this).attr('xheight', $(this).height());
		$(this).css('height','0px');
	});
	$(window).resize(function() {
		refreshLayout("instant")
	});
	
	//activate the appropriate sidebar title based on scroll
	$(window).scroll(function() {
		if ($(window).scrollTop() < $("#advising-section").offset().top)
		{
			console.log("Pathway");
			changeActive("to_pathway");
		}
		else if ($(window).scrollTop() < $("#after-section").offset().top)
		{
			console.log("Advising");
			changeActive("to_advising");
		}
		else if ($(window).scrollTop() < $("#sp-section").offset().top)
		{
			console.log("After Pathway");
			changeActive("to_after");
		}
		else
		{
			console.log("SP");
			changeActive("to_sp");
		}
	});
	
	function changeActive(id)
	{
		if (!$("#"+id).hasClass("active"))
		{
			$('.jump_anchor').each(function (){
				$(this).parent().removeClass("active");
			});
			$("#"+id).addClass("active");
		}
	}
});

function refreshLayout(speed)
{
	var main_height = $("#faq-content").height();
	var sidebar_height = $(".pf-sidebar").height();
	if (speed == "instant"){
		$("#sidebar").css("height", main_height);
	}
	else if (speed == "smooth"){
		$("#sidebar").animate({ "height": main_height }, "fast");
	}
}

//Expand/collapse the parameter container.
function expand(object)
{
	if (($("#"+object).height()) == 0) {
		$("#"+object).animate({ "height": ($("#"+object).attr('xheight')+'px') }, "slow", function(){ 
			refreshLayout("smooth")
		});
	}
	else{
		$("#"+object).animate({ "height": "0px" }, "slow", function(){
			refreshLayout("smooth")
		});	
	}
}

