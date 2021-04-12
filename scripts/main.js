$('#input_group').on('input', function() {
    $(this).val($(this).val().replace(/[A-Za-z]/, ''))
});