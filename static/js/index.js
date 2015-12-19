$(function(){
	$('#left-menu a').click(function(){
		$(this).parent('li').addClass('active');
		$(this).parent('li').siblings().removeClass('.active');
	})
})