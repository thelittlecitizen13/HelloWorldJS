myFunction()

function myFunction() {
    var txt;
    var person = prompt("Please enter your name:", "Little Citizen");
    if (person == null || person == "") {
      txt = "User cancelled the prompt.";
    } else {
      txt = "Hello World! Good morning " + person;
    }
    alert(txt);
  }