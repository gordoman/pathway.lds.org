function expand(object)
{
	if (($("#"+object).height()) == 0)
	{
		$("#"+object).animate({ "height": "100" }, "slow" );
	}
	else
	{
		$("#"+object).animate({ "height": "0" }, "slow" );
	}
}