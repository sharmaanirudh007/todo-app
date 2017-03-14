$(document).ready(function(){

	$('li').click(function(){

	var x = $(this);
	var item = {item: x.html()};
	//$('#check').html("hello");
	$.ajax({
				type: "POST",
				url: "/delete",
				data: item,
				success: function(data){
	        location.reload();
					x.remove();
							}
				});
	});

$('#click').click(function(){

var x = $('#note');
var note = {item: x.val()};
//$('#check').html('hello');
$.ajax({
			type: "POST",
			url: "/todo",
			data: note,
			success: function(data){
        location.reload();
				$('#suc').append(data);
						}
			});
});
});
