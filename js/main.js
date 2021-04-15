const deg = 6;
const hr = document.querySelector('#hr');

setInterval(() => {
    let day = new Date();
let hh = day.getHours() * 30;
let mm = day.getMinutes() * deg;

hr.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`;
mn.style.transform = `rotateZ(${mm}deg)`;
})

/* */
function currentTime() {
    let date = new Date(); 
    let hour = date.getHours();
    let min = date.getMinutes();
    
    hour = updateTime(hour);
    min = updateTime(min);

    let hourFirst = String(hour)[0];
    let hourSecond = String(hour)[1];
    let minFirst = String(min)[0];
    let minSecond = String(min)[1];

    document.getElementById("digital__clock__hour_first").innerText =  hourFirst ;
    document.getElementById("digital__clock__hour_second").innerText =  hourSecond ;
    document.getElementById("digital__clock__min_first").innerText =  minFirst; 
    document.getElementById("digital__clock__min_second").innerText =  minSecond; 
     
     
    let t = setTimeout(function(){ currentTime() }, 1000); 
  }
  
  function updateTime(k) {
    if (k < 10) {
      return "0" + k ;
    }
    else {
      return k;
    }
  }
  
  currentTime(); 


  