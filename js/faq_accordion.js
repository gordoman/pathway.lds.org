//Collapse all the faqs on pageload
$(document).ready(function() {
	$('.collapsible').each(function (){
		$(this).attr('xheight', $(this).height());
		$(this).css('height','0px');
	});
});

//Expand/collapse the parameter container.
function expand(object)
{
	if (($("#"+object).height()) == 0)
	{
		$("#"+object).animate({ "height": ($("#"+object).attr('xheight')+'px') }, "slow" );
	}
	else
	{
		$("#"+object).animate({ "height": "0px" }, "slow" );
	}
}

