$(function() {
	$(".header p").animated("fadeInDownBig");

	$(window).scroll(function () {
		// значение, на которое сместилась страница при прокрутке
		var top = $(document).scrollTop();
		$('.header').css({
			//задаём позицию фонового изображения
			'background-position': '0px -'+(top/3).toFixed(2)+'px'
		});
	});

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
