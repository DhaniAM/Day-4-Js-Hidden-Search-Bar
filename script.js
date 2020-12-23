const button = document.querySelector("button");
const container = document.querySelector(".container");
const search = document.querySelector("input");

button.addEventListener("click", () => {
	container.classList.toggle("active");
	search.focus();
});
