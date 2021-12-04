// woo JS 🥳

const meter = document.getElementById("energy")
const inpt = document.getElementById("input")

meter.value = inpt.value

inpt.addEventListener("change", function()
{
    meter.value = Math.sqrt(inpt.value * 10)
    //change to any other math function if needed
})

