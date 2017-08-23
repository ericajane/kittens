$(function() {


	var form = $('#ajax-contact');


	var formMessages = $('#form-messages');

	// Sets event listener for the contact form.
	$(form).submit(function(e) {
		// Stops browser from submitting form.
		e.preventDefault();

		// Serialize the form data.
		var formData = $(form).serialize();

		// Submits form.
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			// Use 'success' class if properly verified.
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');


			$(formMessages).text(response);

			// Clears form.
			$('#name').val('');
			$('#email').val('');
			$('#message').val('');
		})
		.fail(function(data) {
			// Sets 'error' class if verification unsuccessful.
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');


			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Oops! An error occured and your message could not be sent.');
			}
		});

	});

});
