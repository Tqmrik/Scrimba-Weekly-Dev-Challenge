// You got this! 💫


// 💻 Work: 25 mins
// ☕️ Short break: 5 mins
// 🌯 Long break: 15 mins


const work = document.getElementById("work-btn");
const shortBreak = document.getElementById("short-break-btn");
const longBreak = document.getElementById("long-break-btn");
const timeDisplay = document.getElementById("time-display");
const phase = document.getElementById("phase");
const queryText = document.getElementById("queryText");
const totalW = document.getElementById("totalWork");

let stInter;
let minutes = 0;
let second = 0;
let query = [];

let totalWorkMin = 0;
let totalWorkSec = 0;


// let countValues = localStorage.getItem("timerCount")
// if(countValues)
// {
//     minutes = parseInt(countValues.split(" ")[0])
//     second = parseInt(countValues.split(" ")[1])
// }

work.addEventListener("click", function()
{
    query.push("Work")
    renderQuery()
    if(!stInter)
    {
        //we don't really care if will be executed when working since we have guard clause above
        queryHandler();
    }
        
}) 

shortBreak.addEventListener("click", function()
{
    query.push("Short Break")
    renderQuery()
    if(!stInter)
    {
        queryHandler();
    }
})

longBreak.addEventListener("click", function()
{
    query.push("Long Break")

    //Render query every time button is pushed
    renderQuery()

    if(!stInter)
    {
        queryHandler();
    }
})

function queryHandler()
{
    if(query.length > 0)
    {
        switch(query.shift())
        {
            case "Work":
                phase.textContent = "Work"

                //Render query on element shift
                renderQuery()

                minutes += 25;
                // second = 15;
                setTimer()
                break;

            case "Short Break":
                phase.textContent = "Short Break"
                renderQuery()
                minutes += 5;
                // second = 5;
                setTimer()
                break;

            case "Long Break":
                phase.textContent = "Long Break"
                renderQuery()
                minutes += 15;
                // second = 10;
                setTimer()
                break;
        }
    }
    else
    {   //For design purposes only
        phase.textContent = "";
    }
    
}

function renderQuery()
{
    if(query.length > 0)
    {
        queryText.textContent = "Query: "
        for(let i = 0; i < query.length; i++)
        {
            if(i == 0)
            {
                queryText.textContent += `${query[i]}`;
            }
            else
            {
                queryText.textContent += `, ${query[i]}`;
            }
        }
    }
    else
    {
        //For design purposes only
        queryText.textContent = ""
    }
    
}

function renderTotalWork()
{
    if(totalWorkSec >= 60)
    {
        totalWorkMin = Math.floor(totalWorkSec / 60)
        totalWorkSec = totalWorkSec % 60
    }
    if(totalWorkSec < 10)
    {
        totalW.textContent = `Total focussed work: ${Math.floor(totalWorkMin)}:0${totalWorkSec}`
    }
    else
    {
        totalW.textContent = `Total focussed work: ${Math.floor(totalWorkMin)}:${totalWorkSec}`
    }
    
}

function setTimer()
{
    if(second < 10)
    {
        //To display seconds corretly on start (9 -> 09)
        timeDisplay.textContent = `${minutes}:0${second}`
    }
    else{
        timeDisplay.textContent = `${minutes}:${second}`
    }
    if(!stInter)
    {
        //Dont put it so that it will recursivly call itself
        stInter = setInterval(countdown, 1000);
    }
}

function countdown()
{
    if(minutes || second)
    {
        if(phase.textContent == "Work")
        {
            totalWorkSec++;
            renderTotalWork();
        }
        
        //It's possible to do that by modulo
        //but i thought that will only add more computational operations rather than just
        //assigning value, feel free to change if like doing things your way
        if(second == 0)
        {   
            second = 59;
            minutes -= 1;
        }
        else
        {
            second--;
        }



        if(!minutes && !second)
        {
            timeDisplay.textContent = `0:00`

            //Cannot clear Interval even if set to undefined, on the other hand clearInterval doesn't set stInter to falsy value so both lines are equally important
            clearInterval(stInter)
            stInter = undefined

            //Smooth transition between states, change ms values on your wish
            // phase.textContent = "";
            setTimeout(queryHandler, 75)
            //also if value are too big then it's possible to hit button on 0:00 and set 
        }

        else if(second < 10 || second == 0)
        {
            //To display seconds correctly (9 -> 09)
            timeDisplay.textContent = `${minutes}:0${second}`  
        }
        else
        {
            timeDisplay.textContent = `${minutes}:${second}`  
        }
    }
    // localStorage.setItem("timerCount", JSON.stringify(`${minutes} ${second}`))
    //TODO: pause? 
}