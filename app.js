var timeleft = 60;
var downloadTimer = setInterval(function(){
  document.getElementById("timeClock").innerHTML = timeleft + " seconds remaining";
  timeleft -= 1;
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("timeClock").innerHTML = "Finished"
  }
}, 1000);