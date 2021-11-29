// ✨ You got this! 
const toggle = document.getElementById("toggle")
const headr = document.getElementById("header")
const posts = document.getElementsByClassName("post")

switchTheme()

toggle.addEventListener("click", function() {
    switchTheme()
})


function switchTheme()
{
    if(!toggle.validity.valueMissing)
    {
    headr.className = headr.getAttribute("class") + " dark"
    headr.style.transition = "all 1s ease"

    for(let i = 0; i < posts.length; i++)
    {
        posts[i].className = posts[i].getAttribute("class") + " dark"
        posts[i].style.transition = "all 1s ease"
    }

    }
    else{
        headr.className = headr.getAttribute("class").split(" ")[0]
    for(let i = 0; i < posts.length; i++)
    {
        posts[i].className = posts[i].getAttribute("class").split(" ")[0]
    }
    }
}

