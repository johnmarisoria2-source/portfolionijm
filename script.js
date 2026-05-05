function calculate() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers!");
        return;
    }
    
    var sum = num1 + num2;
    var difference = num1 - num2;
    var product = num1 * num2;
    var quotient = num2 !== 0 ? (num1 / num2).toFixed(2) : "Cannot divide by zero!";
    var remainder = num2 !== 0 ? (num1 % num2).toFixed(2) : "Cannot divide by zero!";
    
    document.getElementById("sum").innerHTML = "Sum: " + sum.toFixed(2);
    document.getElementById("difference").innerHTML = "Difference: " + difference.toFixed(2);
    document.getElementById("product").innerHTML = "Product: " + product.toFixed(2);
    document.getElementById("quotient").innerHTML = "Quotient: " + quotient;
    document.getElementById("remainder").innerHTML = "Remainder: " + remainder;
}

function clearFields() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("sum").innerHTML = "";
    document.getElementById("difference").innerHTML = "";
    document.getElementById("product").innerHTML = "";
    document.getElementById("quotient").innerHTML = "";
    document.getElementById("remainder").innerHTML = "";
}