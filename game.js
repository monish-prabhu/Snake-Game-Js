import {SNAKE_SPEED} from './snake.js';
import {snakeHit, draw as drawSnake,update as updateSnake} from './snake.js';
import {draw as drawFood, update as updateFood} from './food.js';
import { snakeOutOfBounds } from './snake.js';
let lastRenderTime = 0;
let gameStatus = false;
const gameBoard = document.getElementById('game-board');
// let counter = 0;
// let prev = 0;
function main(currentTime){
    // counter++;
    if(gameStatus)
        {
            if(confirm('Lost-Press ok to restart.'))
                window.location = '/';
            return;
        }
    
    window.requestAnimationFrame(main);
    let secondSinceLastLender = (currentTime-lastRenderTime)/1000;
    
    if(secondSinceLastLender<(1/SNAKE_SPEED))
        return;
    // console.log(`repainted after ${counter-prev} callbacks`);
    // prev = counter;
    lastRenderTime = currentTime;
    // console.log(`Render speed = ${SNAKE_SPEED}`); 
    update();
    draw(gameBoard);
     
}

let update = function(){
    updateSnake();
    updateFood();
    gameOver();
}
let draw = function(){
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

let gameOver = function(){
    gameStatus = snakeHit()||snakeOutOfBounds();
};
window.requestAnimationFrame(main);

 