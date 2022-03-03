const url = "https://api.adviceslip.com/advice";
// document.querySelector(".loader").style.display = "none";

const motherFunction = function () {
  const getAdvice = function () {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        document.querySelector(".advice-text").textContent = data.slip.advice;
        document.querySelector(".advice-number").textContent = data.slip.id;
      });
  };

  document.querySelector(".container").style.display = "none";
  document.querySelector(".parent").classList.add("spinner-1");

  setTimeout(() => {
    document.querySelector(".parent").classList.remove("spinner-1");
    document.querySelector(".container").style.display = "block";
    getAdvice();
  }, 2000);
};
motherFunction();

document
  .querySelector(".dice-button")
  .addEventListener("click", motherFunction);
