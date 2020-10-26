// The input is required
function validateRequired(inputRequired, errorFields) {
	let input = inputRequired;
	let isFilled = input.val();
	let message;
	let status;

	if(!isFilled) {
		status = true;

		if (errorFields == '.error-name') {
			message = 'Nama tidak boleh kosong';
		} else if (errorFields == '.error-phone') {
			message = 'Nomor telepon tidak boleh kosong';
		} else {
			message = 'Alamat tidak boleh kosong';
		}

		$(errorFields).html(message);
	} else {
		status = false;
		$(errorFields).html('');
	}

	return status;
}

// The input must be email and also required
function validateEmail(inputEmail, errorFields) {
	let input = inputEmail;
	let re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	let isFilled = input.val();
	let isEmail =re.test(isFilled);
	let status;

	if(!isFilled) {
		status = true;
		$(errorFields).html('Email tidak boleh kosong');
	} else if (!isEmail) {
		status = true;
		$(errorFields).html('Format email salah, silakan cek kembali');
	} else {
		status = false;
		$(errorFields).html('');
	}

	return status;
}

// The input must be a number and also required
function validateNumber(inputNumber, errorFields) {
	let input = inputNumber;
	let re = /^\d*$/;
	let isFilled = input.val();
	let isNumber =re.test(isFilled);
	let status;

	if(!isFilled) {
		status = true;
		$(errorFields).html('Nomor telepon tidak boleh kosong');
	} else if (!isNumber) {
		status = true;
		$(errorFields).html('Format isian harus nomor telepon');
	} else {
		status = false;
		$(errorFields).html('');
	}

	return status;
}
