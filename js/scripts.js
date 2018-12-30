
//Coding the start button

var button = document.querySelector("#start");
var score = document.querySelectorAll(".gameContainer__display");

Array.prototype.shuffle = function() {
    var input = this;
     
    for (var i = input.length-1; i >=0; i--) {
     
        var randomIndex = Math.floor(Math.random()*(i+1)); 
        var itemAtIndex = input[randomIndex]; 
         
        input[randomIndex] = input[i]; 
        input[i] = itemAtIndex;
    }
    return input;
}
var tempArray = [ 1, 2, 3]
tempArray.shuffle();

button.addEventListener("click", function(){
    for(var i=0; i<score.length;i++){
     for(var i=0;i<tempArray.length;i++){
       score[i].textContent=tempArray[i];
     };
   };
    tempArray.shuffle();
   })