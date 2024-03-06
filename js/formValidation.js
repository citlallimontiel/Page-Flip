(function () {
	// Disabling HTML5 form validation
	document.forms.register.noValidate = true;

	// Event listener for form submission
	$('form').on('submit', function(e) {
		var elements = this.elements;
		var valid = {};
		var isFormValid = true;

		// Loop through form elements
		for (var i = 0, l = elements.length; i < l; i++) {
			var element = elements[i];
			var isValid = validateElement(element);

			if (!isValid) {
				showErrorMessage(element);
				isFormValid = false;
			} else {
				removeErrorMessage(element);
			}

			valid[element.id] = isValid;
		}

		// Additional validation for the 'bio' field
		if (!validateBio()) {
			var bioElement = document.getElementById('bio');
			showErrorMessage(bioElement);
			valid.bio = false;
			isFormValid = false;
		} else {
			removeErrorMessage(document.getElementById('bio'));
		}

		// Check if all fields are valid
		for (var field in valid) {
			if (!valid[field]) {
				isFormValid = false;
				break;
			}
		}

		// Prevent form submission if not valid
		if (!isFormValid) {
			e.preventDefault();
		}
	});

	// Function to validate individual form elements
	function validateElement(element) {
		if (element.type === 'text' || element.type === 'textarea') {
			return validateRequired(element) && validateLength(element);
		} else if (element.type === 'email') {
			return validateRequired(element) && validateEmail(element);
		}
		// Add more validation rules for other types if needed
		return true;
	}

	// Function to validate if a field is required
	function validateRequired(element) {
		return element.required && !isEmpty(element);
	}

	// Function to validate the length of a field
	function validateLength(element) {
		var minLength = parseInt(element.getAttribute('minlength')) || 0;
		return element.value.length >= minLength;
	}

	// Function to validate an email field
	function validateEmail(element) {
		var emailRegex = /\S+@\S+\.\S+/;
		return emailRegex.test(element.value);
	}

	// Function to validate the 'bio' field
	function validateBio() {
		var bioElement = document.getElementById('bio');
		return validateLength(bioElement);
	}

	// Function to check if a field is empty
	function isEmpty(element) {
		return !element.value.trim();
	}

	// Function to display error messages
	function showErrorMessage(element) {
		var errorId = element.id + '-error';
		var errorMessage = 'Please fill out this field.';
		var errorElement = document.getElementById(errorId);

		if (!errorElement) {
			errorElement = document.createElement('span');
			errorElement.id = errorId;
			errorElement.className = 'error-message';
			element.parentNode.appendChild(errorElement);
		}

		errorElement.textContent = errorMessage;
	}

	// Function to remove error messages
	function removeErrorMessage(element) {
		var errorId = element.id + '-error';
		var errorElement = document.getElementById(errorId);
		if (errorElement) {
			errorElement.parentNode.removeChild(errorElement);
		}
	}
})();
