const fixedColumn = document.querySelector(".fixed-column");
const contentColumn = document.querySelector(".content-column");

window.addEventListener("scroll", function () {
    const contentHeight = contentColumn.offsetHeight;
    const windowHeight = window.innerHeight;

    if (contentHeight > windowHeight) {
        fixedColumn.style.bottom = "auto";
    } else {
        fixedColumn.style.bottom = windowHeight - contentHeight + "px";
    }
})

function changeColor(hover) {
    hover.style.color = "white";
}

function resetColor(hover) {
    hover.style.color = "grey";
}


const formHeading = document.querySelector(".form-heading");
const formInputs = document.querySelectorAll(".contact-form-input");

formInputs.forEach((input) => {
    input.addEventListener("focus", () => {
        formHeading.style.opacity = "0";
        setTimeout(() => {
            formHeading.textContent = `Renseignez : ${input.placeholder}`;
            formHeading.style.opacity = "1";
        }, 300);
    });

    input.addEventListener("blur", () => {
        formHeading.style.opacity = "0";
        setTimeout(() => {
            formHeading.textContent = "Formulaire de contact";
            formHeading.style.opacity = "1";
        }, 300);
    });
});

