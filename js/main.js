document.addEventListener("DOMContentLoaded", function() {
 

  var submitButton =document.getElementById('submit');
  var submitButton2 =document.getElementById('submit2');
  var activities = document.getElementById('activities');



 submitButton.addEventListener('click', function(event) {
  alert('Thank you, keep safe!');

  })
  submitButton2.addEventListener('click', function(event) {
    alert('Thank you, keep enjoying your quarantine!');
    activities.value="";
  
    })

  
})

