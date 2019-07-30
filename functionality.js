
var letters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers=["1","2","3","4","5","6","7","8","9","0"];
var symbols=["#","$","@","%"];
var inputText = document.getElementById("inputField");
var dynamicList = document.getElementById("list");

function review(){
  //alert(inputText.value[0]); si selecciona el primer caracter
  for (var i = 0; i < letters.length; i++) {
    if(inputText.value[0]===letters[i]){
      evaluate(inputText,letters+numbers,"Identifier");
      break;
    }
  }

  for (var i = 0; i < numbers.length; i++) {
    if(inputText.value[0]===numbers[i]){
      evaluate(inputText,numbers,"Number");
      break;
    }
  }

  for (var i = 0; i < symbols.length; i++) {
    if (inputText.value[0]===symbols[i]) {
      evaluate(inputText,symbols,"Symbol");
      break;
    }
  }
}

  function evaluate(arrayToEvaluate, arrayToCompare, typeOfWord){
    var integrity=false;
    for (var i = 0; i < inputText.value.length; i++){ //arreglo para el texto ingresado
      var found=false;
      for (var j = 0; j < arrayToCompare.length; j++){ //arrego de todos los caracteres de comparacion
        if (arrayToEvaluate.value[i]==arrayToCompare[j]){
          integrity=true;  
          found=true;
          break;
        }
      }
      if (found==false) {
        integrity=false;
        addListItem(inputText.value+"   - Error");
        break;
      }
    }
    if (integrity==true){ 
      addListItem(inputText.value+"  - "+ typeOfWord);
    }
  }

  function addListItem(textAdd){
    dynamicList.innerHTML = dynamicList.innerHTML + "<li class=\"list-group-item\">"+textAdd+"</li>";
  }