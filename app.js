
//Countdown timer 
var timeLeft = 10;
var downloadTimer = setInterval(function(){
  document.getElementById("timeClock").innerHTML = timeLeft + " seconds remaining";
  timeLeft -= 1;
  if(timeLeft <= 0){
    clearInterval(downloadTimer);
    submitForm()
    //document.getElementById("timeClock").innerHTML = "Finished"
  }
}, 1000);


//Redirciting to score page after timer is up

// var redirect = "https://www.espn.com/";

// function timerRedirect() {
//      timeClock = document.getElementById("timeClock");
//      if (count > 0);{
//         timeLeft--;
//         timeClock.innerHTML = "+timeLeft+" + "Seconds";
//         setTimeout("timerRedirect()", 1000)
//         console.log(timeClock)

//      
     

function submitForm() {
   var selectedInputs =  document.querySelectorAll('input:checked');
   console.log(selectedInputs);
   var correct = 0;
   var incorrect = 0;
   for (var i = 0; i < selectedInputs.length; i++){
       if(selectedInputs[i].attributes['data-r']){
            //We ahve a correct answer
            console.log('correct');
            correct++;
       }
       else{
            //We ahve aincorrect answer
            console.log('incorrect');
            incorrect++;

       }
   }

   var unanswered= 10 - (correct + incorrect);
    var mainContainer = document.querySelector('div[name="main-container"]');
    var correctAns = document.createElement('p');
    correctAns.innerText = 'Correct: ' + correct;
    var wrongAns = document.createElement('p');
    wrongAns.innerText = "Wrong: " + incorrect;
    var unansweredAns = document.createElement('p');
    unansweredAns.innerText = "Unanswered: " + unanswered;
    var containerDiv = document.createElement('div');
    containerDiv.appendChild(correctAns);
    containerDiv.appendChild(wrongAns);
    containerDiv.appendChild(unansweredAns);
    mainContainer.innerHTML = '';
    mainContainer.appendChild(containerDiv);
//DO something here
}



