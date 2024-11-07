
Swal.fire({
    title: 'Gaming Day Soon Announcement!',
    imageUrl: 'https://images.indianexpress.com/2024/07/GRKnAY9XAAA_Tgr.jpg',
    imageAlt: 'Event Image',
    showCloseButton: true,
    closeButtonColor:'#ebd577',
    showConfirmButton: false,
    color:'#fff',
    customClass: {
      popup: 'swal-custom-popup'
    },
    background: 'rgba(0, 0, 0, 0.7)',
    allowOutsideClick: false
  });
  
  
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
                Swal.close();
                if (data.result === 'success') {
                    Swal.fire({
                        icon: 'success',
                        title: 'Contact submitted!',
                        text: `Thank you, ${name}! We will reach out to you soon via email.`,
                    });
                    $('#contact-form')[0].reset();
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Submission failed',
                        text: 'An error occurred. Please try again later.',
                    });
                }
            },
            error: function (error) {
                Swal.close();
                Swal.fire({
                  icon: 'success',
                  title: 'Contact submitted!',
                  text: `Thank you, ${name}! We will reach out to you soon via email.`,
              });
            }
        });
    });
  });
  
  