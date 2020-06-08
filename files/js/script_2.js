$(function(){

	/* - - - Подключение fancybox - - - */
 	$('.fancybox').fancybox({
		helpers: {
			overlay: {
				locked: false
			}
		}
	});

	/* - - - Кнопка Наверх и прилепляем шапку - - - */
	$(window).scroll(function(){

		var scrollTop = $(window).scrollTop();
		var headerOffset = $('#wrapper').offset().top;

		if (scrollTop > headerOffset) $('header.main').addClass('bas_fixed');
		if (scrollTop <= headerOffset) $('header.main').removeClass('bas_fixed');
	});

	/* - - - Стилизация элементов управления - - - */
	$('.bas_styler').styler();
});