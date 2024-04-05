const Display = document.getElementById("Display");

function appendToDisplay(input) {
    Display.value += input;
}

function Clear() {
    Display.value = "";
}


function calculate() {
    try {
        Display.value = eval(Display.value);

    }
    catch (error) {
        Display.value = "🥵🤬";
        
    }
}