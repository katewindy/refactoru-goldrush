
$(document).on('ready', function() {

  	var count = 0;

  	//Adds a new moneybag icon to the map on click and lets you enter a note
	$('#map-canvas').on('click', function(event){
		var x = event.pageX;
		var y = event.pageY;


		$('body').append('<img class="moneybag" id="' + count +'" src="business-money-bag-icon.png">');
		$('#'+count).css("top", y-10);
		$('#'+count).css("left", x-10);
		
		$('body').append('<div class="noteholder"><textarea class="notebox" id="note'+count+'">Enter Note Here</textarea></div>');
		$('#note'+count).parent().css({'top': y-10, 'left': x+20});

		count++;
		
	});

	// removes a moneybag icon and the associated note when an existing icon is clicked
	$(document).on('click','.moneybag', function(){
		var tempID = $(this).attr('id');
		$(this).remove();
		$('#note'+tempID).parent().remove();
	});

	// note is saved when enter is pressed while within the textbox
	$(document).on('keypress','.notebox', function(event) {
		if (event.which === 13) {
			var tempText = $(this).val();
			var tempID = $(this).attr('id');
			var noteText = $('<p class = "note" id="'+tempID+'"></p>').text(tempText);
			$(this).replaceWith(noteText);
			$(noteText).parent().hide();
		}
	});
	
	// Shows the note when the associated moneybag is moused over
	$(document).on('mouseover','.moneybag', function(){
		var tempID = $(this).attr('id');
		$('#note'+tempID).parent().show();
	});

	// hides the note when the user stops mousing over the associated moneybag
	$(document).on('mouseleave','.moneybag', function() {
		var tempID = $(this).attr('id');

		if ($('#note'+tempID).is('p')) {
			$('#note'+tempID).parent().hide();
		}
	});


});

