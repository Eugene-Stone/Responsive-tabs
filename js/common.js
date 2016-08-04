$(document).ready(function() {
	// Custom Tabs ========
	$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
		$(this)
		.addClass('active').siblings().removeClass('active')
		.closest('div.info-tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
	});

	$(".tabs__caption li").click(function() {
		$(this).parents(".info-tabs").find(".disabled").removeClass('disabled');
	});

	$(".tabs__caption li:first-child").click(function() {
		$(this).parents(".info-tabs").find(".tab-prev").addClass('disabled');
	});

	$(".tabs__caption li:last-child").click(function() {
		$(this).parents(".info-tabs").find(".tab-next").addClass('disabled');
	});

	$(".tab-next").click(function() {
		$(this).parents(".info-tabs").find(".tabs__caption li.active:not(:last-child)").removeClass('active').next("ul.tabs__caption li").addClass('active')
		$(this).parents(".info-tabs").find(".tabs__content.active:not(:last-child)").removeClass('active').next(".tabs__content").addClass('active')	

		$(this).parents(".info-tabs").find(".tab-prev").removeClass('disabled')
		$(this).parents(".info-tabs").find(".tabs__content.active:last-child").parents(".info-tabs").find(".tab-next").addClass('disabled')	
	});
	$(".tab-prev").click(function() {
		$(this).parents(".info-tabs").find(".tabs__caption li.active:not(:first-child)").removeClass('active').prev("ul.tabs__caption li").addClass('active')
		$(this).parents(".info-tabs").find(".tabs__content.active:not(:first-child)").removeClass('active').prev(".tabs__content").addClass('active')	

		$(this).parents(".info-tabs").find(".tab-next").removeClass('disabled')
		$(this).parents(".info-tabs").find(".tabs__content.active:first-child").parents(".info-tabs").find(".tab-prev").addClass('disabled')	
	});
	// Custom Tabs END ========
});