$(document).ready(function() {
    $('#addButton').click(function() {
        var taskText = $('#taskInput').val().trim();

        if (taskText !== '') {
            var li = $('<li></li>').text(taskText);
            var checkButton = $('<span class="check"><i class="fas fa-check"></i></span>');

            checkButton.click(function() {
                $(this).parent().toggleClass('completed'); 
            });

            li.prepend('<span class="dot"></span>'); 
            li.append(checkButton);
            $('#taskList').append(li);
            $('#taskInput').val('');
        } else {
            alert('Por favor, digite uma tarefa.');
        }
    });
});
