const generateAdviceBtn = document.querySelector(".generator");
const adivceId = document.querySelector(".advice-id");
const advice = document.querySelector(".advice");

generateAdviceBtn.addEventListener("click", async () => {
  const response = await fetch("https://api.adviceslip.com/advice");
  const generatedAdvice = await response.json();
  adivceId.innerText = generatedAdvice.slip.id;
  advice.innerText = generatedAdvice.slip.advice;
});
