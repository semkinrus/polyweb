$('.input_group').on('input', function() {
        (this).val($(this).val().replace(/[А-Яа-яЁё]/g, ''));
        console.log('change');
    });
