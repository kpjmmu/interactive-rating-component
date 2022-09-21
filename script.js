const ratings = document.querySelectorAll(".rating-container");
const submitBtn = document.querySelector(".submit-btn");
const optionLinks = document.querySelectorAll(".option a");
let ratingValue = 0;

// Retrieve value from rating item clicked
let clickFn = function (e) {
    clearAlert();
    ratingValue = e.target.textContent;
    e.preventDefault();
    var activeLink = document.querySelector(".option .active");

    if (activeLink) {
        activeLink.classList.remove("active");
    }
    this.classList.add("active");
}

for (let i = 0; i < optionLinks.length; i++) {
    optionLinks[i].addEventListener("click", clickFn, false);
}

// Execute submit button
submitBtn.addEventListener("click", function () {
    if (ratingValue >= 1) {
        document.querySelector(".rating-card").style.display = "none";
        document.querySelector(".response-card").style.display = "initial";

        document.querySelector(".rating-return").textContent = `You selected ${ratingValue} out of 5`;
    } else {
        document.querySelector("#alert").style.display = "block";
    }
})

// Clear alert
function clearAlert() {
    document.querySelector("#alert").style.display = "none";
}


