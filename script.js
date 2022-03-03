const url = "https://api.adviceslip.com/advice";

const getAdvice = function () {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector(".advice-text").textContent = data.slip.advice;
      document.querySelector(".advice-number").textContent = data.slip.id;
    });
};

getAdvice();

document.querySelector(".dice-button").addEventListener("click", getAdvice);
