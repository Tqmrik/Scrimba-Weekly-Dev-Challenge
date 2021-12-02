// import randomcolor from "randomcolor"

const advice = [
    "If you’re good at something, never do it for free.",
    "Do, or do not. There is no try.",
    "It’s what you do right now that makes a difference.",
    "Until you start believing in yourself, you ain't gonna have a life!",
    "Life does not stop and start at your convenience.",
    "You know what the trouble about real life is? There's no danger music."
]


let attempts = 10
if(localStorage.getItem("attempts"))
{
    attempts = localStorage.getItem("attempts")
}


const adviceButton = document.getElementById("adviceBtn")
const textField = document.getElementById("adviceDisplay")
const inptArea = document.getElementById("inptArea")

inptArea.value = ""

adviceButton.addEventListener("click",function()
{
    if(attempts > 0)
    {
        let rng = Math.floor(Math.random() * advice.length)
        textField.textContent = advice[rng];
        attempts--;
        localStorage.setItem("attempts", attempts)
    }
    else
    {
        textField.textContent = "You are out of questions for today";
    }
    
})


// generate random light colors: 
    // adviceEye.style.backgroundColor = randomcolor({luminosity: 'light'})
