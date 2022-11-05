var lucky = ["WINNER", "LOOSER"];

function winningButton(){
    document.getElementById("Winning Button-text").innerHTML = lucky[Math.floor(Math.random() * lucky.length)]
}    

