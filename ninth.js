let boxes = document.querySelectorAll('.box');
let reset_button = document.querySelector("#reset-btn");
let msg_container = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let count = 0;


let turnO = true;

const win_patterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box) =>{
    box.addEventListener("click", ()=>{
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }

        box.disabled = true;

        count++;
        check_winner();

        if(count == 9 && !check_winner()){
            draw_game();
        }

    })
})

const check_winner = ()=>{
    for(patterns of win_patterns){
        let post1 = boxes[patterns[0]].innerText;
        let post2 = boxes[patterns[1]].innerText;
        let post3 = boxes[patterns[2]].innerText;

        if(post1 != "" && post2 != "" && post3 != ""){
            if(post1 === post2 && post2 === post3){
                disable_boxes();
                show_winner(post1);
                return true;
            }
        }
    }
    return false;
}

const show_winner = (winner)=>{
    msg.innerText = `Winner is ${winner}`;
    msg_container.classList.remove("hide");
}

const reset_game = ()=>{
    turnO = true;
    enable_boxes();
    msg_container.classList.add("hide");
}

const disable_boxes = ()=>{
    for(box of boxes){
        box.disabled = true;
    }
}

const enable_boxes = ()=>{
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

reset_button.addEventListener("click", reset_game);

const draw_game = ()=>{
            msg.innerText = "Match is Drawn";
            msg_container.classList.remove("hide");
}