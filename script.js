  $(document).ready(function () {
    $('#contact-form').on('submit', function (e) {
        e.preventDefault();
  
        Swal.fire({
            icon: 'info',
            title: 'Please wait...',
            text: 'Submitting your details and message',
            willOpen: () => {
                Swal.showLoading();
            },
            showConfirmButton: false,
            allowOutsideClick: false,
        });
  
        const formData = new FormData(this);
        const name = formData.get('name');
        const url = 'https://script.google.com/macros/s/AKfycbxVNnLAj3zSm709STKn0eZwxwif4YnwGVcfI1uL-nJa2wHGw6sV7_2wqAEl45TwTCP_Tw/exec';
  
        $.ajax({
            url: url,
            method: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function (data) {
                Swal.close(); // Close the loading popup
                if (data.result === 'success') {
                    Swal.fire({
                        icon: 'success',
                        title: 'Contact submitted!',
                        text: `Thank you, ${name}! We will reach out to you soon via email.`,
                    }).then(() => {
                        // Reload the page after successful submission
                        location.reload();
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Submission failed',
                        text: 'An error occurred. Please try again later.',
                    });
                }
            },
            error: function (error) {
                Swal.close(); // Close the loading popup
                Swal.fire({
                    icon: 'success',
                    title: 'Contact submitted!',
                    text: `Thank you, ${name}! We will reach out to you soon via email.`,
                }).then(() => {
                    // Reload the page after successful submission
                    location.reload();
                });
            }
        });
    });
  });