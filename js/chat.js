$(document).ready(function(){
	$('.sendMessage').on('click', function(){
		if($('.chatInput').val() == ''){
			$(this).attr('disabled', true);
		}
		var x = $(this).siblings('.chatInput').val();
		// console.log(x);
		$('.chatDisplay').append(x + "<hr>");
		$('.chatInput').val('');
	});
	$('body').css('background-color', 'red');
});

// function chatty(){
// 	var x = document.getElementById('fart').value;
// 	console.log(x);
// }