$(document).ready(function(){

  // Initialize Parse with your Parse application & javascript keys
  Parse.initialize("79YwQYLgdXp7C9SPK0zzvSHbViUg8TiS4wxTHldN", "s1M8586V4j0iMHiHBd11RtzcOy8PPYg4g5Nyz3tE");

  // Setup the form to watch for the submit event
  $('#contact').submit(function(e){
    e.preventDefault();

    // Grab the elements from the form to make up
    // an object containing name, email and message
    var data = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
  };

    // Run our Parse Cloud Code and
    // pass our 'data' object to it
    Parse.Cloud.run("sendEmail", data, {
      success: function(object) {
        $('#response').html('your message has been sent. Thank you').addClass('success').fadeIn('fast');
        $("#name").val('');
        $("#email").val('');
        $("#message").val('');
      },

      error: function(object, error) {
        console.log(error);
        $('#response').html('Email was not sent! Check if you missed something!!').addClass('error').fadeIn('fast');
      }
    });
  });

});
