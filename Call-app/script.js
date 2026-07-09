// All variables and Doc Selection

const tasks = [];

let addNote = document.querySelector("#Addnote");
let formcontainer = document.querySelector(".form-container");
let closeForm = document.querySelector(".closeForm")
let main = document.querySelector(".main")

const form = document.querySelector("form");

const imageUrlInput = form.querySelector(
    "input[placeholder='https://example.com/photo.jpg']"
);

const fullNameInput = form.querySelector(
    "input[placeholder='Enter Full name']"
);

const homeTownInput = form.querySelector(
    "input[placeholder='Enter Home Town']"
);

const purposeInput = form.querySelector(
    "input[placeholder='e.g., Quick appointment note']"
);

const categoryRadios = form.querySelectorAll("input[name='category']");

const submitButton = form.querySelector(".submit-btn")

// Code Starts Here

function saveToLocalStorage(arr) {
    
}

addNote.addEventListener("click", function () {
    formcontainer.style.display = "initial";
    main.style.display = "none";
});

closeForm.addEventListener("click", function(){
    formcontainer.style.display = "none";
    main.style.display = "flex";
});



form.addEventListener("submit", function(evt){
    evt.preventDefault();
    const imageUrl = imageUrlInput.value.trim();
    const fullName = fullNameInput.value.trim();
    const homeTown = homeTownInput.value.trim();
    const purpose = purposeInput.value.trim();
    
    if (imageUrl === "") {
        alert("Please enter an Image URL.");
        return;
    }

    if (fullName === "") {
        alert("Please enter your full name.");
        return;
    }

    if (homeTown === "") {
        alert("Please enter your Home Town.");
        return;
    }

    if (purpose === "") {
        alert("Please enter your Purpose.");
        return;
    }

    if (!categorySelected) {
        alert("Please select a Category");
        return;
    }

});