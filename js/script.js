$(document).ready(function() {

	/******** Home page ********/

	var linkPort = $("#link-portfolio");
	linkPort.click(function() {
		var id = $(this).attr('data-href');
		$('html,body').animate({
			scrollTop: $(id).offset().top},
			400);
	});

	/******** Portfolio projects ********/

	// Scroll animation from table of contents to section
	var secTitle = $(".list-roles-ol a");
	secTitle.click(function() {
		var id = $(this).attr('data-href');
		$('html,body').animate({
			scrollTop: $(id).offset().top},
			400);
	});

	// Click on image container to view the next image
	var imgContainer = $(".image-container");

	imgContainer.click(function() {
		// Replace the main image according to the selected thumbnail's index
		var currThumb = $(this).closest(".row").find(".thumbnail-selected");
		var currIdx = currThumb.index();

		// determine correct image menu to get the current image base
		var imgMenu = $(this).closest(".row").find(".image-menu");
		var allMenuImages = imgMenu.children('img');
		var allImagesSize = allMenuImages.length;

		// Get the next image index
		var nextImgIdx, nextImgThumb;
		// If the current index is the last image, the next image is index 0
		if (currIdx == allImagesSize - 1) {
			nextImgIdx = 0;
			nextImgThumb = $(allMenuImages[nextImgIdx]);
		} else {
			nextImgIdx = currIdx + 1;
			nextImgThumb = $(allMenuImages[nextImgIdx]);
		}

		// Get the image container to switch images
		var allContainerImages = $(this).children('img');
		var currImg = $(this).find(".image-placeholder");
		var nextImg = $(allContainerImages[nextImgIdx]);

		// toggle the selected thumbnail
		currThumb.removeClass('thumbnail-selected');
		nextImgThumb.addClass('thumbnail-selected');
		
		// fade out the old image and fade in the new image by changing classes
		nextImg.toggleClass('image-placeholder carousel-image');
		currImg.toggleClass('image-placeholder carousel-image');
	});

	// Select thumbnail
	var selThumbnail = $(".thumbnail");

	selThumbnail.click(function() {
		// Replace the main image according to the selected thumbnail's index
		var curr = $(this);
		var idx = curr.index();

		// toggle the selected thumbnail
		var oldThumb = curr.closest(".row").find('.thumbnail-selected');
		$(oldThumb).removeClass('thumbnail-selected');
		curr.addClass('thumbnail-selected');

		// determine parent image container to get the current image base
		var imgContainer = curr.closest(".row").find(".image-container");
		var allImages = imgContainer.children('img');
		// use the thumbnail's index to get the correct carousel image
		var newImg = $(allImages[idx]);
		// fade out the old image and fade in the new image by changing classes
		var oldImg = curr.closest(".row").find(".image-placeholder");
		newImg.toggleClass('image-placeholder carousel-image');
		oldImg.toggleClass('image-placeholder carousel-image');
	});

	// Video embedding and muting
	// $('.vid-placeholder').click(function() {
	// 	var video = '<iframe src="'+ $(this).attr('data-video') +'"></iframe>';
	// 	// var video = '<iframe width="560" height="315" src="https://www.youtube.com/embed/X1dVUaHJB0g" frameborder="0" allowfullscreen></iframe>';
	// 	// $(this).find('img').hide();
	// 	$(this).append(video);
	// });

	/******** Navigation ********/

	// Horizontally center nav with logo
	// Initialize the margin top
	var $nav = $('.nav-personal');
	var $logoImg = $('.logo img');
	var logoHeight = $logoImg.height();
	var marginAmount = (logoHeight - $nav.height()) / 2;
	$nav.css('margin-top', marginAmount);
	// Constantly align nav with logo upon resizing
	$(window).on('resize', function() {
		logoHeight = $logoImg.height();
		marginAmount = (logoHeight - $nav.height()) / 2;
		$nav.css('margin-top', marginAmount);
	});

	/******** Social media icons ********/

	// Re-ordering the icon-set when screen resizes
	var widthLimit = 650;
	var iconSet = $("#icon-set");
	var topContainer = $("#icon-set-container-top");
	var botContainer = $("#icon-set-container-bot");
	if ($(window).width() <= widthLimit) {
			iconSet.remove().appendTo(botContainer);
		} else {
			iconSet.remove().appendTo(topContainer);
	}

	$(window).on('resize', function() {
		if ($(window).width() <= widthLimit) {
			iconSet.remove().appendTo(botContainer);
		} else {
			iconSet.remove().appendTo(topContainer);
		}
	});

	/******** scrollUp ********/
	$(function () {
		$.scrollUp({
			scrollName: 'scrollUp', // Element ID
			scrollDistance: '2000', // Distance from top before showing element (px)
			scrollSpeed: 300, // Speed back to top (ms)
			animation: 'slide', // Fade, slide, none
			animationInSpeed: 500, // Animation in speed (ms)
			animationOutSpeed: 500, // Animation out speed (ms)
			scrollText: '', // Text for element
			activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
		});
	});

});