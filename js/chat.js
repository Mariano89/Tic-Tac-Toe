$(document).ready(function(){
	$('.sendMessage').prop('disabled', true);
	
	$('.chatInput').keyup(function(){
		if($('.chatInput').val().length != 0){
			$('.sendMessage').prop('disabled', false);
		} else {
			$('.sendMessage').prop('disabled', true);
		}
	});

	$('.sendMessage').on('click', function(){
		var x = $(this).siblings('.chatInput').val();
		// console.log(x);
		$('.chatDisplay').append(x + "<hr>");
		$('.chatInput').val('');
		$('.sendMessage').prop('disabled', true);
	});
	
});

// function chatty(){
// 	var x = document.getElementById('fart').value;
// 	console.log(x);
// }