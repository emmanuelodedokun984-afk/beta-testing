const form = document.getElementById("betaForm");
const button = document.getElementById("submitButton");
const message = document.getElementById("message");

form.addEventListener("submit", function () {

    button.disabled = true;
    button.textContent = "Submitting...";

    message.style.display = "block";
    message.textContent = "Submitting your registration...";

});
