$(function(){

	$('.bas_download_tab a').click(function(){

		$('.bas_download_tab a').removeClass('active');
		$(this).addClass('active');

		$('.bas_download_list > ul > li').removeClass('active');
		$($(this).attr('href')).addClass('active');

		return false;
	});
	
	$('.bas_download_list li > a').click(function(){

		$(this).parent('li').toggleClass('active');
		$(this).next().slideToggle();
	});
});