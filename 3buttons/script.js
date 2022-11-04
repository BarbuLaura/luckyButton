let lucky = 0;

function winningButton1(){
    lucky += 3
    if((lucky % 3) === 0){
    document.getElementById("Winning Button-text").innerHTML = "WINNER"
    }else{
        document.getElementById("Winning Button-text").innerHTML = "LOOSER"
    }
}    
function winningButton2(){
    lucky += 2
    if((lucky % 2) === 0){
       document.getElementById("Winning Button-text").innerHTML = "WINNER"
    } else{
        document.getElementById("Winning Button-text").innerHTML = "LOOSER"
    }
}   
function winningButton3(){
    lucky +=5
    if((lucky % 5) === 0){
    document.getElementById("Winning Button-text").innerHTML = "WINNER"
    } else {
        document.getElementById("Winning Button-text").innerHTML = "LOOSER"
    }
}
