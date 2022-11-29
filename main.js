const counterElement = document.querySelector('#counter');
const btnStart = document.querySelector('#start');
const btnPause = document.querySelector('#pause');
const btnReset = document.querySelector('#reset');
const interactiv = document.querySelector('.interactiv');

let counter = 0;
let timerID;
let timerShrek;

btnStart.onclick = function(){
        timerID =  setInterval(function(){
            counter = counter + 1;
            counterElement.innerText = counter;
    }, 1000)
     timerShrek = setInterval(function(){
        if (counter > 0){
            console.log('hay');
            interactiv.insertAdjacentHTML('afterbegin',htmlexample)
            // interactiv.append(htmlexample);
        }
    },1000)
}


btnPause.onclick = function(){
    clearInterval(timerID);
    clearInterval(timerShrek);
}

btnReset.onclick = function(){
    counter = 0;
    counterElement.innerText = counter;
    clearInterval(timerID);
    interactiv.innerHTML = '';

}

const htmlexample = `<img src="https://upload.wikimedia.org/wikipedia/ru/thumb/d/d9/%D0%A8%D1%80%D0%B5%D0%BA_%28%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%B6%29.jpg/220px-%D0%A8%D1%80%D0%B5%D0%BA_%28%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%B6%29.jpg" alt="">`;


// const timerShrek = setInterval(function(){
//     if (counter > 0){
//         console.log('hay');
//         interactiv.insertAdjacentHTML('afterbegin',htmlexample)
//     }
// },1000)

