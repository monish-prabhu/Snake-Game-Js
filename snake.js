import { getInputDirection } from "/input";
import { isOutGrid } from "/grid";
export const SNAKE_SPEED = 4;
let newSegments = 0;
const snakeBody = [{x:11,y:11}];
export let update = function(){
    // console.log('update');
    addSegments();
    const inputDirection = getInputDirection();
    for(let i=snakeBody.length-2;i>=0;i--){
        snakeBody[i+1] = {...snakeBody[i]};
    }
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
    
}; 

export let draw = function(gameBoard){
    snakeBody.forEach((segment) => {
    const snakeElement = document.createElement('div') ;
    snakeElement.style.gridRowStart = segment.x;
    snakeElement.style.gridColumnStart = segment.y;
    snakeElement.classList.add('snake');
    gameBoard.appendChild(snakeElement); 
    });
};
export let onSnake = function(foodPosition){
    return snakeBody.some(snakeSegment=>{
        return(snakeSegment.x==foodPosition.x && snakeSegment.y == foodPosition.y);
    });
}

export let expandSnake = function(amount){
    newSegments += amount;
}

function addSegments(){
    for(let i=0;i<newSegments;i++){
        snakeBody.push({...snakeBody[snakeBody.lenght-1]});
    }
    newSegments = 0;
}

export let snakeHit = function(){
    if(snakeBody.length==1)
        return false;
    for(let i=1;i<snakeBody.length;i++){
        if(snakeBody[0].x==snakeBody[i].x&&snakeBody[0].y==snakeBody[i].y)
           return true;
    }
    return false;
};
export let snakeOutOfBounds = function(){
    return isOutGrid(snakeBody[0]);
}