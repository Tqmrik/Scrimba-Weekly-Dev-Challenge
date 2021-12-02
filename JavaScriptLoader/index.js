// Challenge instructions

// Wire up the loader so that it spins

const loadr = document.getElementById("loader")
const btn = document.getElementById("btn")
let pressed = false
let degr = 360
let stInter
let borderColor = "light"


btn.addEventListener("click", function()
{
    stInter = setInterval(chgBordColor, 2100)
})

function rotate()
{
    if(pressed)
    {
        degr += 360
        loadr.style.transform = `rotate(${degr}deg)`
    }
    else
    {
        pressed == true
        loadr.style.transition = "all 2s ease"
        degr += 360
        loadr.style.transform = `rotate(${degr}deg)`
    }
}

function chgBordColor()
{
    if(pressed)
    {
        changeCol()

    }
    else
    {
        pressed == true
        loadr.style.transition = "all 2s ease"
        changeCol()

    }
}

function changeCol()
{
    if(borderColor == "light")
    {
        loadr.style.border = "16px solid black"
        loadr.style.borderTop = "16px solid hotpink"
        loadr.style.borderBottom = "16px solid hotpink"
        borderColor = "dark"
    }
    else
    {
        loadr.style.border = "16px solid hotpink"
        loadr.style.borderTop = "16px solid black"
        loadr.style.borderBottom = "16px solid black"
        borderColor = "light"
    }
    
}
// Stretch goals:

// 1. Add a timer
// 2. Change the loader style

    //             border: 16px solid hotpink;
    // border-top: 16px solid black;
    // border-bottom: 16px solid black;