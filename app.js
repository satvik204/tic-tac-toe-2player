//setting zero in localstorage
if (localStorage.getItem("xscore") === null) {
    localStorage.setItem("xscore",0)
    localStorage.setItem("yscore",0)
}


//declare variables
const clickAudio = new Audio('./asset/mixkit-sci-fi-click-900.wav')
const victoryAudio = new Audio('./asset/result.mp3')
const drawAudio = new Audio('./asset/tictactoe_draw_sound.wav')
let xscore = Number(localStorage.getItem("xscore"))
let yscore = Number(localStorage.getItem("yscore"))
let scoretextx = document.querySelector(".xscore")
let scoretexty = document.querySelector(".yscore")
let resultdisplay = document.querySelector(".resultdisplay")
let board = ["","","","","","","","","",]
let turncounter = 0;
let turn = "X";
let square = document.querySelectorAll(".square")
const line = document.querySelector(".line");
//set scoretext on load 
scoretextx.innerHTML = xscore;
scoretexty.innerHTML = yscore;
let gameEnded = false;

//set text on board when clicked
 function sendData(num) {



    const winner = checkWin(board,num,turn === "X" ? "O" : "X" );    
           if (winner === "none") {
            
    clickAudio.play();
            square.forEach((val,idx) => {
                console.log(num);
                
                if (num === idx && square[idx].innerHTML === "" && (turn === "X"  || turn === "O")) {
                    turncounter+=1;
                    if (turncounter % 2 === 1) {
                        turn = "X"
                    }else{
                        turn = "O"
                    }  
                    board[num] = turn;
                    square[idx].innerHTML = turn;  
                }
           
        }) 
           }else if(winner === "draw"){
            drawAudio.play();
            gameEnded = true;
               resultdisplay.innerHTML = "It's a draw!"
                  board = [];
                  turn = 0;
                  turncounter = "";
               
           }else if(winner === "X" || winner === "O"){
            victoryAudio.play();
            gameEnded = true;
            set = 1;
            resultdisplay.innerHTML = `${winner} won!🎉`
 
            if (winner === "X") {
             
            xscore +=1;   
            }else{
            yscore +=1;
            }
            localStorage.setItem("xscore",xscore);
            localStorage.setItem("yscore",yscore);
            scoretextx.innerHTML = xscore;
            scoretexty.innerHTML = yscore;
            
           }
           
        }
        
 


    


//checkWin function
function checkWin(boards,num,turn) {
   if (gameEnded) {
    return;
   }
     
    boards[num]  = turn;
   
    if (boards[0] === boards[1] && boards[1] === boards[2] && boards[1] !== "") {
        line.style.display = "block";
        const top  =   parseInt(window.getComputedStyle(line).top,10)
        line.style.top = `${top-100}px`;

     
        line.style.transform = "rotate(0deg)";
        line.style.animation = "growLine 1s forwards";
        square[0].style.animation = "growSize 1s forwards";
        square[1].style.animation = "growSize 1s forwards";
        square[2].style.animation = "growSize 1s forwards";
        square[num].innerHTML = boards[0];
         return boards[0]
         
    }else if (boards[3] === boards[4] && boards[4] === boards[5] && boards[3] !== "") {
        line.style.display = "block";
        line.style.transform = "rotate(0deg)";
        line.style.animation = "growLine 1s forwards";

        square[num].innerHTML = board[3];
        return boards[3]
   }else if (boards[6] === boards[7] && boards[7] === boards[8] && boards[8] !== "") {
    line.style.display = "block";
    const top  =   parseInt(window.getComputedStyle(line).top,10)

    line.style.top = `${top+100}px`;
    line.style.transform = "rotate(0deg)";
    line.style.animation = "growLine 1s forwards";

    square[num].innerHTML = board[6];
    return boards[6]
}else if (boards[0] === boards[3] && boards[3] === boards[6] && boards[6] !== "") {
    line.style.display = "block";
    
    const left  =   parseInt(window.getComputedStyle(line).left,10)

    line.style.left = `${left-217}px`;
    line.style.transform = "rotate(90deg)";
    line.style.animation = "growLine 1s forwards";

    square[num].innerHTML = boards[3];
    return boards[3]
}else if (boards[1] === boards[4] && boards[4] === boards[7] && boards[7] !== "") {
    line.style.display = "block";
    line.style.transform = "rotate(90deg)";
    line.style.animation = "growLine 1s forwards";

    square[num].innerHTML = boards[1];
    return boards[1]
}else if (boards[2] === boards[5] && boards[5] === boards[8] && boards[8] !== "") {
    line.style.display = "block";
    const left  =   parseInt(window.getComputedStyle(line).left,10)
    line.style.left = `${left-17}px`;
    line.style.transform = "rotate(90deg)";
    line.style.animation = "growLine 1s forwards";
    
       square[num].innerHTML = boards[8];  
    return boards[8]
}else if (boards[0] === boards[4] && boards[4] === boards[8] && boards[8] !== "") {
    line.style.display = "block";
    line.style.animation = "growLine 1s forwards";
    
    square[num].innerHTML = boards[8];

    return boards[8]
}else if (boards[2] === boards[4] && boards[4] === boards[6] && boards[6] !== "") {
    line.style.display = "block";
    line.style.transform= "rotate(135deg)";
    line.style.animation = "growLine 1s forwards";
    
    square[num].innerHTML = boards[6];
    return boards[6]
}else{
      let count  = 0;
    for (let i = 0; i < board.length; i++) {
        if (boards[i] !== "") {
            count +=1;
        }
        
    }

    if (count === 9) {
        square[num].innerHTML = turn;
        return "draw";
    }else{
    return "none";
    }
   }   
    
}
//restart game function

function next() {

         location.reload();

}

function restart() {
    localStorage.setItem('xscore',0)
    localStorage.setItem('yscore',0)
    location.reload();

}