$(window).on('load', function() {
	$('.flickity--slider').flickity({
		cellAlign: 'left',
		contain: true,
		freeScroll: false,
		wrapAround: true,
		pageDots: true,
		autoPlay: false,
		prevNextButtons: false
	});
});

$(window).on('load', function() {
	$('.flickity--hero').flickity({
		cellAlign: 'left',
		contain: true,
		freeScroll: false,
		wrapAround: true,
		pageDots: true,
		autoPlay: true,
		prevNextButtons: false
	});
});

$(window).on('load', function() {
	$('.flickity--posts').flickity({
		cellAlign: 'left',
		contain: true,
		freeScroll: false,
		wrapAround: false,
		pageDots: true,
		autoPlay: false,
		prevNextButtons: false,
        arrowShape: { 
			x0: 15,
			x1: 65, y1: 50,
			x2: 65, y2: 40,
			x3: 25
		}
	});
});

$(window).on('load', function() {
	$('.flickity--banner').flickity({
		cellAlign: 'left',
		contain: true,
		freeScroll: false,
		wrapAround: false,
		pageDots: false,
		autoPlay: false,
		prevNextButtons: true,
		arrowShape: { 
			x0: 15,
			x1: 65, y1: 50,
			x2: 65, y2: 40,
			x3: 25
		}
	});
});