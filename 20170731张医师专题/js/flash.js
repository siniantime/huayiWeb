(function function_name(argument) {
	// body...
	var oImg = $('#flash ul');
	var spot = $('#flash p span');
	var iNow=0;
	var timer = null;
	
	autoPlay();

	spot.hover(function() {
		/* Stuff to do when the mouse enters the element */
		clearInterval(timer);
		iNow=$(this).index();
		move();

	}, function() {
		/* Stuff to do when the mouse leaves the element */
		autoPlay();

	});

	function autoPlay(){
		timer = setInterval(function(){
			if (iNow<6) {
				iNow++;
				move();
			}else{
				oImg.css('left', '0');
				iNow=1;
				move();
			}
		},3000)
	}


	function move() {
		// body...
		oImg.stop().animate({left:-999 * iNow + 'px'}, 1000);
		spot.removeClass('active');
		(iNow==6)?spot.eq(0).addClass('active'):spot.eq(iNow).addClass('active');
	}
})();

//滚动条移动
(function(){
	var oScroll = $('#scroll li');
	var iNow = 0;
	oScroll.click(function(event) {
		/* Act on the event */
		iNow=$(this).index();
		switch(iNow){
			case 0:
			move(500);
			break;
		}
	});

	function move(position) {
		// body...
		$('body').animate({
			'scrollTop':position
		}, 300);
	}


})();