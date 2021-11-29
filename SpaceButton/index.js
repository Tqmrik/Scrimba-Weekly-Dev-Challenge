
const toggle = document.getElementById("toggle")
const headr = document.getElementById("header")
const container = document.getElementById("container")

switchTheme()

toggle.addEventListener("click", function() {
    switchTheme()
})


function switchTheme()
{
    if(!toggle.validity.valueMissing)
    {
        headr.className = headr.getAttribute("class") + " light"
        headr.style.transition = "all 1s ease"
        container.className = container.getAttribute("class") + " light"
        container.style.transition = "all 1s ease"
    }
    else{
        headr.className = headr.getAttribute("class").split(" ")[0]
        container.className = container.getAttribute("class").split(" ")[0]
    }
}

