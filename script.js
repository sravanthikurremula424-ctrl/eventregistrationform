const form = document.getElementById("registrationForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const eventName = document.getElementById("event").value;

    successMessage.textContent =
        `Thank you, ${name}! You have successfully registered for ${eventName}.`;

    form.reset();
});
