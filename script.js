let n1 = document.getElementById("firstNumber");
let n2 = document.getElementById("secondNumber");
let input = document.getElementById("userInput");
let p = document.getElementById("gameResult");

function check() {
  let x = parseInt(n1.textContent);
  let y = parseInt(n2.textContent);
  let z = parseInt(input);
  let i = x + y;
  if (i === z) {
    p.textContent = "Congratulation! You got it right";
    p.style.backgroundColor = "green";
  } else {
    p.textContent = "Please try again!";
    p.style.backgroundColor = "blue";
  }
}

function restart() {
  let r1 = Math.ceil(Math.random() * 100);
  let r2 = Math.ceil(Math.random() * 100);
  n1.textContent = r1;
  n2.textContent = r2;
  input.value = "";
  p.textContent = "";
}
restart();
