$(document).ready(function(){
	
	$('#navSymbol').on('click', function(){

		var target = $('nav');

		if(target.hasClass('close')){
			$('nav').slideDown(500);
			target.removeClass('close');
			target.addClass('open');
			
		}
		else if(target.hasClass('open')){
			$('nav').slideUp(500);
			target.removeClass('open');
			target.addClass('close');
			
		}

	});

		$('#navSymbol').on('click', function(){

		var target = $('#navSymbol');

		if(target.hasClass('navSymbol')){
			target.removeClass('navSymbol');
			target.addClass('navSymbolOpen');
			
		}
		else if(target.hasClass('navSymbolOpen')){
			target.removeClass('navSymbolOpen');
			target.addClass('navSymbol');
			
		}

	});

	$('#navSymbol').on('click', function(){

		var target = $('#line1');

		if(target.hasClass('line1')){
			target.removeClass('line1');
			target.addClass('line1Open');
			
		}
		else if(target.hasClass('line1Open')){
			target.removeClass('line1Open');
			target.addClass('line1');
			
		}

	});
	$('#navSymbol').on('click', function(){

		var target = $('#line2');

		if(target.hasClass('line2')){
			target.removeClass('line2');
			target.addClass('line2Open');
			
		}
		else if(target.hasClass('line2Open')){
			target.removeClass('line2Open');
			target.addClass('line2');
			
		}

	});

});