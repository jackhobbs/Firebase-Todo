$(document).ready(function() {
    $("#add").click(function() {
		var todo = $("#todo").val();
		//console.log(todo);
        $("#showtodo").append(
            '<div class="row no-margin todocontainer">' +
            '	<div class="input-field col s10">' +
            '		<input id="edit_todo" type="text" class="validate" value="'+todo+'">' +
            '		<label for="edit_todo">Todo</label>' +
            '	</div>' +
            '	<div class="input-field col s2">' +
            '		<a href="#"><i class="material-icons deleteTodo">delete_forever</i></a>' +
            '	</div>' +
            '</div>'
        );
		M.updateTextFields();
		 //var todo = $("#todo").val();
		 //$("input").val(todo);
    });


    var deleteTodo = "";
    $(document).on("click", ".todocontainer", function(e) {
        e.preventDefault();
        deleteTodo = $(this).children().attr("id");
        //$("#edit_todo").remove();
		//$("#edit_todo").parent().remove();
		$(this).remove();
        console.log("deleteTodo ID : " + deleteTodo);
    });




});