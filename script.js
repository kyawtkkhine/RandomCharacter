var btn    = document.querySelector("#btn");
var result = document.querySelector("#result");

btn.addEventListener("click", resultSet);

function resultSet(){
   var text   = document.querySelector("#randomCharacter").value;
   var ram = text.charAt(Math.floor(Math.random()* text.length));
   result.innerHTML ="Result is: "+ ram;
}