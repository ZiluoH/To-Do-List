$('#todolist ul').sortable({
	item:"li:not('.listtitle, .additem')",
	connectWith:"ul",
	dropOnEmpty:true,
	placeholder:"emptySpace"
});

$('input').keydown(function(e){
	if(e.keyCode == 13){
		var item = $(this).val();

		$(this).parent().parent().append('<li class=addeditem>' + item + '</li>');
		$(this).val('');
	}
});

$('#trash').droppable({
	drop: function(event, ui){
		ui.draggable.remove();
	}
})