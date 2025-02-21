document.addEventListener("DOMContentLoaded", () => {
  emailjs.init("ucqShmVgrdm9FdUah"); // Replace with your EmailJS public key

  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form from reloading the page

      // Get input values
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var mobile = document.getElementById("mobile").value;
      var subject = document.getElementById("subject").value;
      var message = document.getElementById("message").value;

      // Send email using EmailJS
      emailjs
        .send(
          "service_xmuoy1d",
          "template_8oy4aw8",
          {
            name: name,
            email: email,
            mobile: mobile,
            subject: subject,
            message: message,
          },
          "ucqShmVgrdm9FdUah" // Add your EmailJS Public Key here
        )
        .then(
          function (response) {
            alert("Message Sent Successfully!");
            document.getElementById("contact-form").reset();
          },
          function (error) {
            alert("Failed to send message. Please try again.");
            console.log(error);
          }
        );
    });
});
