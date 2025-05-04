$(document).ready(function () {
      
	  function formatPhoneNumber(input) {
		  let numbers = input.value.replace(/\D/g, '');

		  numbers = numbers.slice(0, 10);

		  let formattedNumber = '';
		  if (numbers.length > 0) {
			formattedNumber += '(' + numbers.slice(0, 3) + ')';
		  }
		  if (numbers.length > 3) {
			formattedNumber += ' ' + numbers.slice(3, 6);
		  }
		  if (numbers.length > 6) {
			formattedNumber += '-' + numbers.slice(6, 10);
		  }

		  input.value = formattedNumber;
		}

		const phoneInput = document.getElementById('phoneNo');
		phoneInput.addEventListener('input', function() {
		  formatPhoneNumber(this);
		});


      function validateForm() {
        let valid = true;
        $('input').removeClass('error');

        const name = $('#UserName').val().trim();
        if (name.length < 2) {
          $('#UserName').addClass('error');
          valid = false;
        }

        const phone = $('#phoneNo').val().trim();
        if (phone.length !== 14) {
          $('#phoneNo').addClass('error');
          valid = false;
        }

        const email = $('#emailID').val().trim();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          $('#emailID').addClass('error');
          valid = false;
        }

        return valid;
      }

      $('#contactForm').on('submit', function (e) {
        e.preventDefault();
        if (!validateForm()) return;

        const formData = $(this).serialize();
        $.ajax({
          url: 'https://formsws-hilstaging-com-0adj9wt8gzyq.runscope.net/solar',
          method: 'POST',
          data: formData,
          success: function () {
            $('#submitBtn').text('Submitted').prop('disabled', true);
          },
          error: function () {
            $('#submitBtn').text('Submitted').prop('disabled', true);
          },
        });
      });
    });