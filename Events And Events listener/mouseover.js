let mouse = document.querySelector("#mouse")

mouse.addEventListener("mouseover", function(){
    mouse.style.backgroundColor = "yellow";

    mouse.addEventListener("mouseout", function(){
        mouse.style.backgroundColor = "Red";
    })
})