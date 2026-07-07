let addNote = document.querySelector("#Addnote");
let formcontainer = document.querySelector(".form-container");
let closeForm = document.querySelector(".closeForm")

addNote.addEventListener("click", function () {
    formcontainer.style.display = "initial";
});

closeForm.addEventListener("click", function(){
    formcontainer.style.display = "none";
});
