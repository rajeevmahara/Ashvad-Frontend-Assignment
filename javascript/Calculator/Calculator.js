let display = document.getElementById("display");

// number + operator add karna
function appendValue(value) {
    display.value += value;
}

function append(value) {
    appendValue(value);
}

// clear all (C button)
function clearDisplay() {
    display.value = "";
}

// final calculation (= button)
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        alert("Invalid Expression");
        display.value = "";
    }
}