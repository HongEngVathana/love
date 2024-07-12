const mybutton = document.getElementById("mybtn");

// Toggle hover class on mouseover and mouseout
mybutton.addEventListener("mouseover", (event) => {
  event.target.classList.toggle("hover");
});

mybutton.addEventListener("mouseout", (event) => {
  event.target.classList.toggle("hover");
});

// Handle click event
mybutton.addEventListener("click", (event) => {
  if (event.target.classList.contains("disabled")) {
    event.target.textContent += " Hello I Love You🥰 Do you Lave me";
  } else {
    event.target.classList.replace("enabled", "disabled");
  }
});
