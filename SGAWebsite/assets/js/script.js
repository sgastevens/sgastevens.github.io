// Check off Specific Todos by clicking

// $("ul").on("click", "li", function(){
// 	$(this).toggleClass("completed");
// });

// $("ul").on("click", "span", function(event){
// 	$(this).parent().fadeOut(500,function(){//this gives us span, parent gives us li
// 		$(this).remove(); //this refers to li, not span
// 	}); 
// 	event.stopPropagation();
// });

// $("input[type='text']").keypress(function(event){
// 	if(event.which === 13){ //checking for enter key
// 		//grabbing todo text from input
// 		var todoText = $(this).val();
// 		$(this).val("");
// 		//create a new li, add to ul
// 		$("ul").append("<li><span><i class= 'fa fa-trash'></i></span> " + todoText + "</li>");
// 	}
// });

// $(".fa-plus").click(function(){
// 	$("input[type='text']").fadeToggle();
// });