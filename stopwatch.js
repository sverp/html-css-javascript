let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
let minute = 0;
let second = 0;
let interval;

start.addEventListener('click', ()=>{    
   interval =  setInterval(Timer,1000);
});

stop.addEventListener('click', ()=>{
    clearInterval(interval);
});

reset.addEventListener('click', ()=>{
    clearInterval(interval);
    sec.innerText = '00';
    second = 0;
    min.innerText = '00';
    minute = 0;
});


function Timer(){
    second++;

    if( second < 10 ){
    sec.innerText = '0' + second;
    }
    else{
        sec.innerText = second;
    }

    if( second > 59 ){
        minute++;
        if( minute < 10 ){
            min.innerHTML = '0' + minute;
        }
        else{
            min.innerHTML = minute;
        }
        
        second = 0;
    }
}
