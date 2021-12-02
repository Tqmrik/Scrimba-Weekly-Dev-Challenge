// import randomCol from '../libs/randomcolor.js'

const fontsArr = [
        "Impact,Charcoal,sans-serif",
        "Brush Script MT, cursive",
        "Luminari, fantasy",
        "Comic Sans MS, cursive",
        "American Typewriter, serif"
    ]

const text = document.getElementById("name")
const btn = document.getElementById("beautifierBtn")


btn.addEventListener("click", function()
{
    text.style.fontFamily = fontsArr[Math.floor(Math.random() * fontsArr.length)]
    text.style.color = randomColOpac()
    text.style.fontWeight = Math.floor(Math.random() * 9) * 100
    btn.style.background = text.style.color
})

function randomCol()
{
    return `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
}

function randomColOpac()
{
    return `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)}, ${Math.random()})`
}



// When the button is clicked, the following things should change

// - font family (use array above)
// - font color (either use randomcolor or your own array of colors)
// - font weight
// - button color (match the font color)



