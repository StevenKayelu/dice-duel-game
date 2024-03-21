let player1Result=0;
let player2Result=0;
document.querySelector("button").addEventListener("click", ()=>{
    document.querySelector("body").style.backgroundColor=""
    const Links=["./images/dice1.png",
    "./images/dice2.png",
    "./images/dice3.png", 
    "./images/dice4.png",
    "./images/dice5.png",
    "./images/dice6.png"]
let Selector1= Math.floor(Math.random()*6)
let Selector2= Math.floor(Math.random()*6)

document.querySelector(".img1").src=Links[Selector1]
document.querySelector(".img2").src=Links[Selector2]
if(Selector1>Selector2)
{   player1Result++
    document.querySelector("#won").innerHTML='<img id="won" src="./images/achievement.png">Player1 won</img>'
    document.querySelector("#turn1").textContent="(you turn)"
    document.querySelector("#turn2").textContent="(wait! for your turn)"
}
else if(Selector1<Selector2)
{   player2Result++
    document.querySelector("#won").innerHTML='Player2 won <img id="won" src="./images/achievement.png"></img>'   
    document.querySelector("#turn2").textContent="(you turn)"
    document.querySelector("#turn1").textContent="(wait! for your turn)"
}
else{
    document.querySelector("#won").innerHTML='No one won <img id="won" src="./images/disappointed.png"></img>'  
    document.querySelector("#won").style.color="red";
   anyonePlay.style.alignText="center"

}
document.querySelector("#pointsForP1").textContent="Wins: "+player1Result;
document.querySelector("#pointsForP2").textContent="Wins: "+player2Result;
})
