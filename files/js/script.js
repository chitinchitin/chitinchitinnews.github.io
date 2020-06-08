$(function(){

	$('.bas_top_menu li').hover(function(){

		$(this).children('ul').stop().fadeIn();

	}, function(){

		$(this).children('ul').stop().fadeOut();
	});
})