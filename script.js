let input = document.querySelector(".input");
let container = document.querySelector(".row");
let string = "";

let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      if (string == "") {
        input.value = "";
      } else {
        string = eval(string);
        input.value = string;
      }
    } else if (e.target.innerHTML == "C") {
      string = "";
      input.value = string;
    } else if (e.target.innerHTML == "x") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    }
    else if(e.target.innerHTML == 'ON'){
      button.setAttribute('disabled','')
    }
     else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      input.value = string;
    }
  });
});

input.addEventListener("keydown", (e) => {
  input.setAttribute("disabled", "");
});

