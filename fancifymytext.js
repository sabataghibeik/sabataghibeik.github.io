function enlargeTextFunction() {
   document.getElementById('textbox').style.fontSize = "24pt";
}

function styleFunction() {
    const textbox =  document.getElementById("textbox");

    if(document.getElementById('radio1').checked) {
       textbox.style.fontWeight = "bold";
       textbox.style.color = "blue";
       textbox.style.textDecoration = "underline";
        
    }
    else if(document.getElementById('radio2').checked)  {
        textbox.style.fontWeight = "normal";
        textbox.style.color = "black";
        textbox.style.textDecoration = "none";
    }
}

function mooFunction() {
    const textbox = document.getElementById("textbox");
    
    var currVal = textbox.value;
    textbox.value = currVal.toUpperCase();

    var parts = (textbox.value).split(".");
    textbox.value = parts.join("-MOO");
}