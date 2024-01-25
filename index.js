// phew… not a lot going on here. Please add some code!

const bookmarkButton = document.querySelector('[data-js="button_Bookmark"]');

bookmarkButton.addEventListener("click", () => {
    bookmarkButton.classList.toggle("bookmark--active");
    console.log("hello");
})