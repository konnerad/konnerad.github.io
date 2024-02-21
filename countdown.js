// Set the date we're counting down to
var countDownDate = new Date("Feb 21, 2024 18:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Display the result in the element with id="countdown"
  document.getElementById("countdown").innerHTML = hours + " h "
  + minutes + " m " + seconds + " s ";
    
  // If the count down is finished, write some text and display the image
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").style.display = "none";
    document.getElementById("finalImage").style.display = "block";
  }
}, 1000);

// Paths to your images
var firstImageSrc = 'amsterdam-ticket.png'; // This is your original image
var secondImageSrc = 'paris-ticket.png'; // Change 'second-image.png' to the path of your second image

document.getElementById('finalImage').addEventListener('click', function() {
  var currentSrc = this.getAttribute('src');
  this.classList.add('fade');
  setTimeout(() => {
    this.src = currentSrc === firstImageSrc ? secondImageSrc : firstImageSrc;
    this.classList.remove('fade');
  }, 500); // This timeout duration should match the transition time in your CSS
});