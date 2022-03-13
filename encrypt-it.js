/*
 * Starter file 
 */


(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    const font12Radio = document.getElementById('font12');
    font12Radio.addEventListener('click', font12);
    
    const font24Radio = document.getElementById('font24');
    font24Radio.addEventListener('click', font24);

    const allCapBtn = document.getElementById('all-caps');
    allCapBtn.addEventListener('click', allCapsFunction);
    
    const encryptBtn = document.getElementById('encrypt-it')
    encryptBtn.addEventListener('click', handleClick);
    
    const resetBtn = document.getElementById('reset')
    resetBtn.addEventListener('click', resetFunction);
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).
  function handleClick() {
    const textarea = document.getElementById('input-text');
    document.getElementById('result').textContent = shiftCipher(textarea);
    //console.log("Window loaded!");
  }

  function resetFunction() {
    document.getElementById('input-text').value = ""
    document.getElementById('result').textContent = ""
  }
  function font12() {
    if(document.getElementById('font12').checked) {
      document.getElementById('input-text').style.fontSize = "12pt";
    }
  }

  function font24() {
    if(document.getElementById('font24').checked) {
      document.getElementById('input-text').style.fontSize = "24pt";
    }
  }

  function allCapsFunction() {
    if(document.getElementById('all-caps').checked) {
      const textarea = document.getElementById('input-text')
      textarea.value = textarea.value.toUpperCase();
    }
  }
  function shiftCipher(text) {
    text = text.value.toLowerCase();
    let result = "";
    for(let i = 0; i < text.length; i++) {
      if(text[i] < 'a' || text[i] > 'z') {
        result += text[i];
      }
      else if(text[i] == 'z') {
        result += 'a';
      }
      else {
        let letter = text.charCodeAt(i);
        let resultLetter = String.fromCharCode(letter + 1);
        result += resultLetter;
      }
    }
    return result;
  }
})();
