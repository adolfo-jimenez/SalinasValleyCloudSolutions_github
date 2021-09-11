var bodyVar = document.querySelector(".homePageBackground")

bodyVar.addEventListener("mouseenter", mouseEnterbodyVar);

function mouseEnterbodyVar() {
    console.log("Mouse has hovered over body section of webpage");

    /* Only records mouse input once per page visit, otherwise, the count doesn't stop */
    bodyVar.removeEventListener("mouseenter", mouseEnterbodyVar);
}

/* This function outputs keyboard key codes. Used for mapping purposes*/
document.addEventListener("keyup", function(event) {
    console.log(event.keyCode);
});