
const getColor = () => {
  // Hex Code
  
  const randomNumber = Math.floor(Math.random() * 16777215);
  
  const randomeCode = "#" + randomNumber.toString(16);
  
  // Using Random Code To Change my Color Container
  
  const bgContainer = document.getElementById("color-container");
  
  bgContainer.style.backgroundColor = randomeCode;
  
  // Hex Code Value Show
  
  document.getElementById("color-code").innerText = randomeCode;
  
  document.getElementById("copy").addEventListener("click", function() {
    navigator.clipboard.writeText(randomeCode);
  })
  
}

document.getElementById("btn").addEventListener("click",getColor)

getColor();
