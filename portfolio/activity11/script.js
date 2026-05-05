// FOR LOOP
function showFor() {
    var number = parseInt(document.getElementById("forNumber").value);
    var text = document.getElementById("forText").value;
    var output = document.getElementById("forOutput");
    
    // Validation
    if (isNaN(number) || number <= 0 || !text) {
        alert("Please enter a valid number (>0) and text!");
        return;
    }
    
    // Clear first, then loop
    output.innerHTML = "";
    for (var i = 1; i <= number; i++) {
        output.innerHTML += "<li>" + text + "</li>";
    }
}

function clearFor() {
    document.getElementById("forNumber").value = "";
    document.getElementById("forText").value = "";
    document.getElementById("forOutput").innerHTML = "";
}

// WHILE LOOP
function showWhile() {
    var number = parseInt(document.getElementById("whileNumber").value);
    var text = document.getElementById("whileText").value;
    var output = document.getElementById("whileOutput");
    
    // Validation
    if (isNaN(number) || number <= 0 || !text) {
        alert("Please enter a valid number (>0) and text!");
        return;
    }
    
    output.innerHTML = "";
    var i = 1;
    while (i <= number) {
        output.innerHTML += "<li>" + text + "</li>";
        i++;
    }
}

function clearWhile() {
    document.getElementById("whileNumber").value = "";
    document.getElementById("whileText").value = "";
    document.getElementById("whileOutput").innerHTML = "";
}

// DO-WHILE LOOP
function showDoWhile() {
    var number = parseInt(document.getElementById("doWhileNumber").value);
    var text = document.getElementById("doWhileText").value;
    var output = document.getElementById("doWhileOutput");
    
    // Validation
    if (isNaN(number) || number <= 0 || !text) {
        alert("Please enter a valid number (>0) and text!");
        return;
    }
    
    output.innerHTML = "";
    var i = 1;
    do {
        output.innerHTML += "<li>" + text + "</li>";
        i++;
    } while (i <= number);
}

function clearDoWhile() {
    document.getElementById("doWhileNumber").value = "";
    document.getElementById("doWhileText").value = "";
    document.getElementById("doWhileOutput").innerHTML = "";
}