$(document).ready(function(){

var activeHero = $('.hero').first().attr('title');

	$('img').first().addClass('shown');

	$('h1').text(activeHero);

	$('button.next').on('click', function(){

		if ( $('img.shown').is(':last-child') ){

			$('h1').fadeOut();

			var activeHero = $('img.shown').toggleClass('shown').siblings(':first').toggleClass('shown').attr('title');

			$('h1').text(activeHero).slideUp();

		}
		else {

			var activeHero = $('img.shown').toggleClass('shown').next().toggleClass('shown').attr('title');

			$('h1').fadeOut('fast', function() {

				$(this).text(activeHero).show('normal');
							
			});

		}

	});

	$('button.prev').on('click', function(){

		if ( $('img.shown').is(':first-child') ){

			$('h1').fadeOut();

			var activeHero = $('img.shown').toggleClass('shown').siblings(':last').toggleClass('shown').attr('title');

			$('h1').text(activeHero).slideUp();

		}
		else {

			var activeHero = $('img.shown').toggleClass('shown').prev().toggleClass('shown').attr('title');

			$('h1').fadeOut('fast', function() {

				$(this).text(activeHero).show('normal');
							
			});

		}

	});


});

