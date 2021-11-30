// Task: Write a function to:
// - Generate a gradient using the colors from the pickers and split percentage from the slider. 
// - Use the gradient as the form background.

// Stretch goals:
// - Add more colors.
// - Add a 'Surprise Me' button which generates random gradients (and updates the inputs).
// - Check for contrast between the gradient and the text.

let backgrX = 200;
let backgrY = 200;
const color1 = document.getElementById("picker-1");
const color2 = document.getElementById("picker-2");
const color3 = document.getElementById("picker-3");
const split = document.getElementById("split");
const frm = document.getElementById("gradient");
const container = document.getElementById("container")

setValue();


color1.addEventListener("input", function()
{
    setValue();
})

color2.addEventListener("input", function()
{
    setValue();
})

color3.addEventListener("input", function()
{
    setValue();
})

split.addEventListener("input", function()
{
    // moving across the box from topleft to bottomright
    frm.style.backgroundPosition = `${split.value}% ${split.value}%`
})


function setValue()
{
    // background also sets all other props to default values(repeat,size etc) 
    // so it's necessary to specify them as well
    // changing color that way is more smoothly, rather then specifying values in gradient
    frm.style.background = `no-repeat linear-gradient(to bottom right, ${color1.value},${color2.value}, ${color3.value})`
    frm.style.backgroundSize = `${backgrX}% ${backgrY}%`
}

//TODO: check for contrast of the text and background