"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form-request");
  form.addEventListener("submit", formSend);

  async function formSend(event) {
    event.preventDefault();

    formValidate(form);
  }

  function formValidate(form) {
    let formReq = document.querySelectorAll("._req");

    for (let i = 0; i < formReq.length; i++) {
      const input = formReq[i];
      formRemoveError(input);

      if (input.classList.contains("_email")) {
        if (!checkEmail(input)) {
          formAddError(input);
        }
      } else if (
        input.getAttribute("type") === "checkbox" &&
        input.checked === false
      ) {
        formAddError(input);
      } else {
        if (input.value === "") {
          formAddError(input);
        }
      }
    }
  }
  
  function formAddError(input) {
    input.classList.add("_error");
  }

  function formRemoveError(input) {
    input.classList.remove("_error");
  }
  
  function checkEmail(input) {
      console.log('email');
    return /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(
      input.value
    );
  }
});
