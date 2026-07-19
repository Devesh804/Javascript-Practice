// All variables and Doc Selection

// const { captureOwnerStack } = require("react");

// const { useLayoutEffect } = require("react");

const tasks = [];

let addNote = document.querySelector("#Addnote");
let formcontainer = document.querySelector('.formcontainer');
let closeForm = document.querySelector(".closeForm")
let main = document.querySelector(".main")
let createnote = document.querySelector(".submit-btn")

const notecontainer = document.querySelector(".note-container");
const upBtn = document.querySelector(".ri-arrow-up-line");
const downBtn = document.querySelector(".ri-arrow-down-line");


const form = document.querySelector("form");

const imageUrlInput = form.querySelector(
    "input[placeholder='https://example.com/photo.jpg']"
);

const fullNameInput = form.querySelector(
    "input[placeholder='Enter full name']"
);

const homeTownInput = form.querySelector(
    "input[placeholder='Enter home town']"
);

const purposeInput = form.querySelector(
    "input[placeholder='e.g., Quick appointment note']"
);

const categoryRadios = form.querySelectorAll("input[name='category']");

const submitButton = form.querySelector(".submit-btn")

// Code Starts Here

function saveToLocalStorage(obj) {
    // purane localstorage nikalo
    if(localStorage.getItem("tasks") === null) {
        let oldTasks = [];
        oldTasks.push(obj);
        localStorage.setItem("tasks", JSON.stringify(oldTasks)); 
    } else {
        let oldTasks = localStorage.getItem("tasks");
        oldTasks = JSON.parse(oldTasks);
        oldTasks.push(obj);
        localStorage.setItem("tasks", JSON.stringify(oldTasks));
    }

}

addNote.addEventListener("click", function () {
    formcontainer.style.display = "initial";
    main.style.display = "none";
});

closeForm.addEventListener("click", function(){
    formcontainer.style.display = "none";
    main.style.display = "flex";
});

createnote.addEventListener("click", function() {
    formcontainer.style.display = "none";
    main.style.display = "flex";
});



form.addEventListener("submit", function(evt){
    evt.preventDefault();
    const imageUrl = imageUrlInput.value.trim();
    const fullName = fullNameInput.value.trim();
    const homeTown = homeTownInput.value.trim();
    const purpose = purposeInput.value.trim();
    const categorySelected = document.querySelector(
    "input[name='category']:checked"
);

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

    saveToLocalStorage({
        imageUrl,
        fullName,
        homeTown,
        purpose,
        categorySelected
    })

    form.reset();
    notecontainer.innerHTML = "";
    showCards();
    updateStack();
});

function showCards() {

   let allTasks = JSON.parse(localStorage.getItem("tasks")) || [];

   allTasks.forEach(function(task, i) {
    // Card
const card = document.createElement("div");
card.className = "card";

// Profile
const profile = document.createElement("div");
profile.className = "profile";

const img = document.createElement("img");
img.src = task.imageUrl;
img.alt = "";

const name = document.createElement("h2");
name.textContent = task.fullName;

profile.append(img, name);

// Details
const details = document.createElement("div");
details.className = "details";

// Home Town
const homeDiv = document.createElement("div");

const homeP = document.createElement("p");
homeP.textContent = "HomeTown";

const homeH4 = document.createElement("h4");
homeH4.textContent = task.homeTown;

homeDiv.append(homeP, homeH4);

// Bookings
const bookingDiv = document.createElement("div");

const bookingP = document.createElement("p");
bookingP.textContent = "Purpose";

const bookingH4 = document.createElement("h4");
bookingH4.textContent = task.purpose;

bookingDiv.append(bookingP, bookingH4);

details.append(homeDiv, bookingDiv);

// Buttons
const cardButtons = document.createElement("div");
cardButtons.className = "card-buttons";

const callBtn = document.createElement("button");
callBtn.className = "call-btn";
callBtn.innerHTML = `<i class="ri-phone-line"></i> Call`;

const msgBtn = document.createElement("button");
msgBtn.className = "msg-btn";
msgBtn.textContent = "Message";

cardButtons.append(callBtn, msgBtn);

// Assemble Card
card.append(profile, details, cardButtons);

// Append to container
document.querySelector(".note-container").appendChild(card);
   })
}

showCards();  

function updateStack() {
    const cards = document.querySelectorAll(".note-container .card");

    for (let i = 0; i < cards.length; i++){

        cards.forEach(function(card, i){
            card.style.zIndex = cards.length - i;
            card.style.transform = `translateY(${index * 25}px) scale(${1-index*0.03})`;
            card.style.opacity = `${1 - i * 0.02}`; 
        });
    }
}
// showCards();

upBtn.addEventListener("click", function(){
    let lastchild = notecontainer.lastElementChild;
    if (lastchild) {
        notecontainer.insertBefore(lastchild, notecontainer.firstElementChild);
        // update
        updateStack();
    }

});

downBtn.addEventListener("click", function(){
    const firstChild = notecontainer.firstElementChild;
    if (firstChild) {
        notecontainer.appendChild(firstChild);
        // update
        updateStack();
    }

});