const submitButton = document.getElementById("submit");
const questionContainer = document.querySelector(".question-container");
// const questionContainerSub = document.querySelector(".result-container");

submitButton.addEventListener("click", () => {
  const selectedAnswer = document.querySelector('input[name="answer"]:checked');
  if (selectedAnswer && selectedAnswer.value === "c") {
    questionContainer.style.backgroundColor = "rgba(59, 234, 59, 0.5)";
    // document.body.style.backgroundImage = "url('/assets/right.jpg')";
  } else {
    questionContainer.style.backgroundColor = "rgba(211, 47, 47, 0.5)";
    // document.body.style.backgroundImage = "url('/assets/wrong.jpg')";
  }
});
