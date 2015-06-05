$(document).ready(function(){

	$('.sendMessage').prop('disabled', true);
	
		// disables send button if no input in text field \\
	$('.chatInput').keyup(function(){
		if($('.chatInput').val().length != 0){
			$('.sendMessage').prop('disabled', false);
		} else {
			$('.sendMessage').prop('disabled', true);
		}
	});

	$('.chatInput').keypress(function(e) {
		if($('.chatInput').val().length != 0 && e.keyCode == 13) {
			console.log($(this));
			var x = $('.chatInput').val();
			$('.chatDisplay').append(x + "<hr>");
			$('.chatInput').val('');
			$('.sendMessage').prop('disabled', true);
		}
	});

	// var myDataRef = new Firebase("https://marianottt.firebaseio.com/chat/");
	// $('.chatInput').keypress(function(e){
	// 	if(e.keyCode == 13) {
	// 		var text = $('.chatInput').val();
	// 		myDataRef.push('User says: ' + text);
	// 		$('.chatInput').val('');
	// 	}
	// });
	// myDataRef.on('child_added', function(snapshot) {
	// 	var message = snapshot.val();
	// 	displayChatMessage(message.text);
	// });
	// function displayChatMessage(text){
	// 	$('<p/>').text(text).appendTo($('.chatDisplay'));
	// 	// $('.chatDisplay')[0].scrollTop = $('.chatDisplay')[0].scrollHeight;
	// };

});

