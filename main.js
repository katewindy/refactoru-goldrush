
$(document).on('ready', function() {


	// function initialize() {
	//     var mapOptions = {
	//       center: { lat: 150.644, lng: -34.397},
	//       zoom: 8
	//     };
	//     var map = new google.maps.Map(document.getElementById('map-canvas'),
	//         mapOptions);
	// }
	//     google.maps.event.addDomListener(window, 'load', initialize);


  	var count = 0;

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

	$(document).on('click','.moneybag', function(){
		var tempID = $(this).attr('id');
		$(this).remove();
		$('#note'+tempID).parent().remove();
	});

	$(document).on('keypress','.notebox', function(event) {
		if (event.which === 13) {
			var tempText = $(this).val();
			var tempID = $(this).attr('id');
			var noteText = $('<p class = "note" id="'+tempID+'"></p>').text(tempText);
			$(this).replaceWith(noteText);
			$(noteText).parent().hide();
		}
	});

	$(document).on('mouseover','.moneybag', function(){
		var tempID = $(this).attr('id');
		$('#note'+tempID).parent().show();
	});

	$(document).on('mouseleave','.moneybag', function() {
		var tempID = $(this).attr('id');

		if ($('#note'+tempID).is('p')) {
			$('#note'+tempID).parent().hide();
		}
	});


});

