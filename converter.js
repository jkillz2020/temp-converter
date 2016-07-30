var celsius = "";
var fahrenheit = "";
var clearBtn = document.getElementById("clear");
var userinput = document.getElementById("temp-input");
var output = document.getElementById("temp-output");

function toCelsius () {
  celsius = (userinput - 32) / 1.8 
}

function toFahrenheit () {
  fahrenheit = userinput * 1.8 + 32
}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  if {
    document.getElementById("celsius").checked
    toCelsius();
    console.log("celsius checked");
  }
  else if {
    document.getElementById("fahren").checked
    toFahrenheit();
    console.log("fahrenheit checked");
  }
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);

function enterKeyPressed(keypress){
  if (keypress.which === 13) {
    displayConvertedData();
  }
}

function clear(){
  document.getElementById("temp-input").value = "";
  document.getElementById(temp-output).innerHTML = "";
}

clearBtn.addEventListener(click, clear);

document.addEventListener("keydown", enterKeyPressed);
