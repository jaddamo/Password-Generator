var display = document.getElementById("display");
var lastPasswords =  document.getElementById("lastPasswords");
var slider = document.getElementById("slider");
var length = document.getElementById("length");

// generate random password
function generate(){

    // set password length/complexity
    var complexity = document.getElementById("slider").value;

    // possible password values
    var values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

    var password = "";

    // create loop to choose password characters
    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    // add password to textbox/display area
    display.value = password;

    // add password to previously generated passwords section
   lastPasswords.innerHTML += password + "<br>";
}

//  set default length display of 25
length.innerHTML = "Length: 25";

// function to set length based on slider position
slider.oninput = function(){
    if(slider.value > 0){
        length.innerHTML = "Length " + slider.value;
    } else{
        length.innerHTML = "Length: 1";
    }
}

// function to copy password to clipboard
function copyPassword(){
    display.select();
    document.execCommand("Copy")
    alert("Password copied to clipboard!");
}


// function to reset generated passwords and input
function resetPage(){
    display.value = "";
    display.innerHTML = "";
    slider.value = 25;
    length.value =25;
    length.innerHTML = "Length: 25";
}

function clearHistory(){

    clearHistoryValue = confirm("Are you sure you want to clear the history?");
    if(clearHistoryValue == true) {
        lastPasswords.innerHTML = "";
    } else{
        return false;
    }
}