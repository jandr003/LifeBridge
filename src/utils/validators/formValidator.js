export function validateName(name) {
	if (!name || !name.trim()) {
		return "Full name is required.";
	}
	if (name.trim().length < 2) {
		return "Please enter your full name.";
	}
	if (!/^[a-zA-ZñÑ.'\- ]+$/.test(name.trim())) {
		return "Name can only contain letters, spaces, and basic punctuation.";
	}
	return "";
}

export function validateEmail(email) {
	if (!email || !email.trim()) {
		return "Email address is required.";
	}
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email.trim())) {
		return "Please enter a valid email address.";
	}
	return "";
}

export function validatePhone(phone) {
	if (!phone || !phone.trim()) {
		return "";
	}
	const digitsOnly = phone.replace(/\D/g, "");
	const phRegex = /^(09\d{9}|\+639\d{9}|639\d{9})$/;
	if (!phRegex.test(digitsOnly) && !phRegex.test(phone.trim())) {
		return "Please enter a valid PH mobile number (e.g. 0917 123 4567).";
	}
	return "";
}

export function validateMessage(message) {
	if (!message || !message.trim()) {
		return "Please enter a message.";
	}
	if (message.trim().length < 10) {
		return "Message should be at least 10 characters long.";
	}
	if (message.trim().length > 1000) {
		return "Message is too long (max 1000 characters).";
	}
	return "";
}

export function validateContactForm(form) {
	return {
		name: validateName(form.name),
		email: validateEmail(form.email),
		phone: validatePhone(form.phone),
		message: validateMessage(form.message),
	};
}


export function isFormValid(errors) {
	return Object.values(errors).every((err) => !err);
}