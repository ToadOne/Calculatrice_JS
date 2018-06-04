const $result = document.querySelector(".result");
const $calculator = document.querySelector(".calculator");
let expression = "";

$calculator.addEventListener("click", onButtonClick);

function onButtonClick(event) {
  const $button = event.target;
  if ($button === $result) return;

  if ($button.classList.contains("reset")) {
    expression = "";
  } else if ($button.classList.contains("equal")) {
    expression = eval(expression);
  } else {
    expression += $button.innerText;
  }

  $result.innerText = expression ? expression : 0;
}
