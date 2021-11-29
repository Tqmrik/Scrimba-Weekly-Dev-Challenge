const screensaver = document.getElementById("screensaver")
const orb = document.getElementById("orb")
const timer = document.querySelector("#timer")


if(localStorage.getItem("animProp"))
{
    //on page load find prop set animation to unset
    orb.style.animation = "unset"
    //countdown for animation
    setTimeout(function()
    {
        orb.style.animation = localStorage.getItem("animProp")
    }, 5000
    )
}


timer.addEventListener("click", function(){
    countdown()})
// It's also important to wrap function in evenListener


function countdown() {
    
    //If button is pressed adds prop to localStorage
    localStorage.setItem("animProp","10s ease-out 0s infinite alternate moveGradient");
   // start an (optional) 5 min timer on pageload
}


