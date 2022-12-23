const form = document.getElementById("form");

form.addEventListener("submit", validateForm);
form.addEventListener("focusout", validateForm);

function validateForm(event) {
  const inputs = form.querySelectorAll("input");

  inputs.forEach((input) => {
    if (event.type === "submit" || event.type === "focusout") {
      if (input.value === "") {
        input.classList.add("error-icon");
        input.nextElementSibling.classList.add("active");
      } else {
        input.classList.remove("error-icon");
        input.nextElementSibling.classList.remove("active");
      }
    }

    if (input.id === "fname" || input.id === "lname") {
      // validate name format
    } else if (input.id === "email") {
      // validate email format
    } else if (input.id === "password") {
      // validate password format
    }
  });
}
