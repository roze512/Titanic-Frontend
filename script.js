document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("form");
    const button = document.querySelector("button");

    if (form && button) {

        form.addEventListener("submit", () => {

            button.innerHTML = "⏳ Predicting...";
            button.disabled = true;

        });

    }

});