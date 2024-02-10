   let hr = document.getElementById('hour');
   let min = document.getElementById('min');
   let  sec = document.getElementById('sec');

       function displayTime(){
      let  date =new Date();
      //getting hour,mins,secs from date
     hh=date.getHours();
     mm=date.getMinutes();
     ss=date.getSeconds();

     let hourRotation=30*hh + mm/2;
     let minRotation=6*mm;
     let secRotation=6*ss;
    

       hour.style.transform=`rotate(${hourRotation}deg)`;
       min.style.transform=`rotate(${minRotation}deg)`;
       sec.style.transform=`rotate(${secRotation}deg)`; 
    }
    setInterval(displayTime,1000);
