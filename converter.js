// Get a reference to the button element in the DOM
var button = document.getElementById("converter");
var clearBtn = document.getElementById("clear");
var userinput = document.getElementById("temp-input");
var output = document.getElementById("temp-output");

button.addEventListener("checked", celsius);
button.addEventListener("checked", fahren);
// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);

function toCelsius () {
  var userInputC = userinput.value;
  var convertedC = ((userInputC - 32) / 1.8);
  output.innerHTML = convertedC + " degrees Celsius"
  if (convertedC > 32) {
    output.style.color = "red";
  } else if (convertedC <= 0) {
    output.style.color = "blue";
  } else {
    output.style.color = "green";
  }
}


function toFahrenheit () {
  var userInputF = userinput.value;
  var convertedF = ((userInputF * 1.8) + 32);
  output.innerHTML = convertedF + " degrees Fahrenheit"
  if (convertedF > 90) {
    output.style.color = "red";
  } else if (convertedF <= 32) {
    output.style.color = "blue";
  } else {
    output.style.color = "green";
  }
}



// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  if (document.getElementById("celsius").checked) {
    toCelsius();
    console.log("celsius checked");
  }
  else if (document.getElementById("fahren").checked) {
    toFahrenheit();
    console.log("fahrenheit checked");
  }
}


function enterKeyPressed(keypress){
  if (keypress.which === 13) {
    determineConverter();
  }
}

function clear(){
  document.getElementById("temp-input").value = "";
  document.getElementById("temp-output").innerHTML = "";
}

clearBtn.addEventListener("click", clear);

document.addEventListener("keydown", enterKeyPressed);
