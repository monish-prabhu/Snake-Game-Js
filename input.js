let inputDirection = {x:0,y:0};
let previousDirection = {...inputDirection};
let isPause = false;
let previous = {...inputDirection};
document.addEventListener('keydown',(event)=>{
    console.log(`key ${event.key} is pressed.`);
    switch(event.key){
        case "ArrowUp":
            if(previousDirection.x!=0||isPause)
                break;
            inputDirection.x = -1;
            inputDirection.y = 0;
            break;
        case "ArrowDown":
            if(previousDirection.x!=0||isPause)
                break;
            inputDirection.x = 1;
            inputDirection.y = 0;
            break;
        case "ArrowLeft":
            if(previousDirection.y!=0||isPause)
                break;
            inputDirection.x = 0;
            inputDirection.y = -1;
            break;
        case "ArrowRight":
            if(previousDirection.y!=0||isPause)
                break;
            inputDirection.x = 0;
            inputDirection.y = 1;
            break;
        case ' ':
            if(!isPause){
            previous = {...inputDirection};
            inputDirection.x = 0;
            inputDirection.y = 0;
            isPause = !isPause;
            console.log('pause');}
            else{
                inputDirection = {...previous};
                isPause = !isPause;
                console.log('resume');
            }
            break;
        default:
            console.log('not a direction key');
    }
});
export let getInputDirection = function(){
    previousDirection = inputDirection;
    return inputDirection;
};

