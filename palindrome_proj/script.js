const input = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const res = document.getElementById("result");

const getInputText = (input) => {
  const transfInput = input.toLowerCase();
  const removeAllexternalCaracter = transfInput.replace(/[^a-zA-Z0-9]/g, "");
  return `${removeAllexternalCaracter}`;
};

const reversetext = (text) => {
  const newText = getInputText(text);
  const reversedText = newText.split("").reverse().join("");
  return `${reversedText}`;
};

const checkPalandrom = (text) => {
  const cleanedRevText = reversetext(text);
  const letterListText = getInputText(text).split("");
  const letterListClRevText = cleanedRevText.split("");
  console.log(letterListText);
  console.log(letterListClRevText);
  for (let i = 0; i < letterListText.length; i++) {
    if (letterListText[i] !== letterListClRevText[i]) {
      return `${text} is not a palindrome`;
    }
  }
  return `${text} is a palindrome`;
};
const checkedText = (text) => {};

button.addEventListener("click", () => {
  if (!input.value) {
    alert("Please input a value");
    res.innerHTML = "";
  } else {
    res.innerText = checkPalandrom(input.value);
  }
});
