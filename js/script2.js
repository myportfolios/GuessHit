
//Coding the start button

var button = document.querySelector("#start"),
    numbShuffle = document.querySelectorAll(".gameContainer__display"),
    numbs = [1, 2, 3],
    numbsDOM = document.querySelectorAll(".gameContainer__numbers"),
    scoreDisplay = document.getElementById("score"),
    score = 5,
    numb1 = document.getElementById("numb1"),
    display1 = document.querySelector(".gameContainer__display--1"),
    display2 = document.querySelector(".gameContainer__display--2");
    display3 = document.querySelector(".gameContainer__display--3");


Array.prototype.shuffle = function () {
    var input = this;

    for (var i = input.length - 1; i >= 0; i--) {

        var randomIndex = Math.floor(Math.random() * (i + 1));
        var itemAtIndex = input[randomIndex];

        input[randomIndex] = input[i];
        input[i] = itemAtIndex;
    }
    return input;
}
var tempArray = [1, 2, 3]
tempArray.shuffle();

//get tempArray.shuffle();

var newNumbs = tempArray.shuffle();
console.log(newNumbs);



button.addEventListener("click", function () {
    for (var i = 0; i < numbShuffle.length; i++) {
        for (var i = 0; i < tempArray.length; i++) {
            numbShuffle[i].textContent = tempArray[i];
        };
    };
    //tempArray.shuffle();

    //create an array of the numbers to choose from
    for (var i = 0; i < numbsDOM.length; i++) {
        for (var i = 0; i < numbs.length; i++) {
            numbsDOM[i].textContent = numbs[i];
        }
    }

})

//ADD EVENT LISTENER TO THE NUMBS
 /*
for(var i=0; i<numbShuffle.length; i++){
     numb1.addEventListener("click", function(){
         if(numb1.textContent === numbShuffle[0].textContent){
             alert("same!");
         }
         else{
          alert("not the same!");
         }
     })
 }
 

for(var i=0; i<numbsDOM.length;i++){
    numbsDOM[i].addEventListener("click", function(){
      //alert("clicked!");
      if(this.textContent === display1.textContent){
          alert("yes!");
          display1.classList.add("hide");
          display2.classList.add("u-active");
          this.style.display = "none";   
      }
      else{
          alert("no");
      }
    })
}
*/
for (var i = 0; i < numbsDOM.length; i++) {
    numbsDOM[i].addEventListener("click", function () {

        if (this.textContent === display1.textContent) {
            alert("yes!");
            display1.classList.add("hide");
            display2.classList.add("u-active");
            this.style.display = "none";
            scoreDisplay.textContent = score += 5;
        }

        else if (this.textContent === display2.textContent) {
            scoreDisplay.textContent = score -= 5;
            alert("yes2!");
        }
        else {
            alert("no");
        }
    })
}



   





  //when the page loads
  //var score =  
