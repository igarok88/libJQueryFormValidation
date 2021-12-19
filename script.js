window.addEventListener("DOMContentLoaded", () => {
	var form = $("#form");
	form.submit(function (e) {
		var agreement = $("#formAgreement");
		var checkboxLabel = $(".checkbox__label");

		if (!agreement.is(":checked")) {
			checkboxLabel.next().remove();
			e.preventDefault();
			checkboxLabel.after("<span class='error'>Поставьте галочку</span>");
		} else {
			checkboxLabel.next().remove();
		}
	});

	$("#form").validate({
		rules: {
			name: "required",
			email: {
				required: true,
				email: true,
			},
			message: {
				required: true,
				minlength: 5,
			},
		},
		messages: {
			name: "Please specify your name",
			email: {
				required: "We need your email address to contact you",
				email: "Your email address must be in the format of name@domain.com",
			},
			message: {
				required: "пожалуйста, заполните поле",
				minlength: jQuery.validator.format("At least {0} characters required!"),
			},
		},
	});
});
