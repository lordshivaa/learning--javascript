// generate a random color

const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = "#"
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
};

let intervalId;
console.log(intervalId);
const startChangingColor = function(){
    console.log("inside startchangig color");


    if (!intervalId) {
        intervalId = setInterval(changeBgColor, 1000);    
    }

    function changeBgColor (){
        document.body.style.backgroundColor = randomColor();
        console.log("inside changebgcolor");
    }
};

const stopChangingColor = function(){
    clearInterval(intervalId)
    intervalId = null;
    
}

document.querySelector('#start').addEventListener('click', startChangingColor)
document.querySelector('#stop').addEventListener('click', stopChangingColor)

