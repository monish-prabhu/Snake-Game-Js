import {expandSnake, onSnake} from './snake.js';
import {getRandomGridPoint} from './grid.js';
let food = {x:5, y:7};
const EXPANSION_RATE = 2;
export let update = function(){
    if(onSnake(food)){
        expandSnake(EXPANSION_RATE);
        food = getNewRandomFood(); //return a random food{} object
    }
}; 

export let draw = function(gameBoard){
    
    const foodElement = document.createElement('div') ;
    foodElement.style.gridRowStart = food.x;
    foodElement.style.gridColumnStart = food.y;
    foodElement.classList.add('food');
    gameBoard.appendChild(foodElement); 
};

let getNewRandomFood = function(){
    let newFood=null;
    while(newFood==null||onSnake(newFood)){
        newFood = getRandomGridPoint(); //write in grid.js
    }
    return newFood;
}