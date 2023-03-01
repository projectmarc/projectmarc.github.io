//function to verify if the input is binary
function isBinary(binary){
  let regex = /^[01]+$/;
  return regex.test(binary);
}

//function to convert from binary to decimal
function bin2dec(binary) {
  let decimal = 0;
  let binaryLength = binary.length;
  for (i = 0; i < binaryLength; i++) {
    let position = binaryLength - 1 - i;
    let basePower = 2 ** i;
    decimal += binary[position] * basePower;
  }
  return decimal;
}

//access to HTML elements
let boton = document.getElementById("botoncito");
let result = document.getElementById("resultadito");

//print when you press the button
boton.addEventListener(
  "click",
  function () {
    let binary = document.getElementById("binarito").value;
    if (isBinary(binary)) {
      result.textContent = bin2dec(binary);
    } else {
      result.textContent = "Ingrese un binario válido.";
    }
    
});
