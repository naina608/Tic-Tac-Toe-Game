console.log("Tic tac toe game")
let press=new Audio("click.wav"); 
let win=new Audio("win.wav");
let gameover=new Audio("game over.mp3");
let turn ="X";
let isgameover=false;
function changeTurn(){
    return turn=== "X"?"0":"X"
}

//Function to check win
function checkwin(){
    let boxtext=document.getElementsByClassName("boxtext");
    let wins=[
        [0,1,2],
        [0,3,6],
        [2,5,8],
        [6,7,8],
        [3,4,5],
        [1,4,7],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !==""))
        {
            document.querySelector('.info').innerText=boxtext[e[0]].innerText+" Won"
            isgameover=true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px";
            win.play();
        }
    })
}
//Game Logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector(".boxtext")
    element.addEventListener('click',()=>{
        if(boxtext.innerHTML==""){
            boxtext.innerHTML=turn;
            press.play();
            turn=changeTurn();
            checkwin();
            if(!isgameover){
            document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
            }
        }
    })
})

//RESET LOGIC
reset.addEventListener('click',function reset(){
    let boxtext=document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element=>{
        element.innerText="";
        turn="X";
        isgameover=false;
        document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px";
    })
})
