$(document).ready(function() {
    $("#demo-form").submit(function(event) {
      // Stop form from submitting normally
      event.preventDefault();
  
      // Get form data
      var formData = {
        name: $("input[name=name]").val(),
        email: $("input[name=email]").val(),
        company: $("input[name=company]").val(),
        message: $("textarea[name=message]").val()
      };
  
      // Send form data via AJAX
      $.ajax({
        type: "POST",
        url: "demo-form-handler.php", // Replace with your form handler URL
        data: formData,
        dataType: "json",
        encode: true
      }).done(function(data) {
        // Show success message
        alert("Thank you for your submission!");
      });
    });
  });
  