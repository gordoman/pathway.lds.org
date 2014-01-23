$(document).ready(function() {
	//var height = $('p.collapsible').height();
	$('p.collapsible').each(function (){
		$(this).attr('xheight', $(this).height());
		$(this).css('height','0px');
	});
});

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