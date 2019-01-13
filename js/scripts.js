var numberArray = [],
    gameDisplay = document.querySelectorAll(".gameContainer__display"),
    dealNumbersArray = [1,2,3],
    dealNumbersDom = document.querySelectorAll(".gameContainer__numbers");

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

var shuffledNumbers = tempArray.shuffle();

//add event to the start button

document.querySelector("#start").addEventListener("click", function(){
    //save the shuffledArray into the empty numberArray
    for(var i=0; i<shuffledNumbers.length; i++){
        numberArray.push(shuffledNumbers[i]);
        console.log(numberArray);
    }
    //alert(numberArray);
    //display the content of numberArray in gameDisplay
    for(var i=0; i<numberArray.length;i++){
        for(var i=0; i<gameDisplay.length;i++){
           gameDisplay[i].textContent = numberArray[i];
        }
    }
    //display the deal numbers in gameContainer__numbers
    for(var i=0; i<dealNumbersArray.length;i++){
        for(var i=0; i<dealNumbersDom.length;i++){
            dealNumbersDom[i].textContent = dealNumbersArray[i];
        }
    }
})