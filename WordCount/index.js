let longest = ""
const textArea = document.getElementById("txtid")
const wordCount = document.getElementById("count")
const longestWord = document.getElementById("longest")
const charactersCount = document.getElementById("characters")

if(textArea.value)
{
    checkField()
}

textArea.addEventListener("input", function()
{
    checkField()
})

function checkField()
{
    if(textArea.value)
    {
        let field = textArea.value.trim().split(" ")
        let longest = field[0]//dynamically search for new longest
        
        wordCount.textContent = field.length
        
        for(let i = 0; i < field.length; i++)
        {
            if(field[i].length > longest.length)
            {
                longest = field[i];
                longestWord.textContent = longest;
                charactersCount.textContent = textArea.value.length
            }
        }
    }
    else{ //if textarea is clear set empty values
        longestWord.textContent = "";
        wordCount.textContent = "";
        charactersCount.textContent = "";
    }
}