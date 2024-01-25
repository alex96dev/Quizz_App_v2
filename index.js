// phew… not a lot going on here. Please add some code!

const bookmarkButton = document.querySelector('[data-js="button_Bookmark"]');
const showAnswerButton = document.querySelector(
  '[data-js="button_showanswer"]'
);
const showAnswer = document.querySelector('[data-js="showanswer"]');

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark--active");
  console.log("hello");
});

showAnswerButton.addEventListener("click", () => {
  showAnswer.classList.toggle("hidden");

  showAnswerButton.textContent.trim() === "Show answer"
    ? (showAnswerButton.textContent = "Hide answer")
    : (showAnswerButton.textContent = "Show answer");
});
