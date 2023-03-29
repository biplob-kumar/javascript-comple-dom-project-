

function DigitalClock() {
    

    let date= new Date();
    let hours= date.getHours();
    let minutes=date.getMinutes();
    let secunds=date.getSeconds();
    let timeformet="AM"

    if(hours==0){
     hours=12
    }
    else if(hours>12){
     hours=hours-12;
     timeformet="PM"
    }
    else if(hours<10){
   hours=`0`+hours
    }

    let finalTime= `${hours}:${minutes} :${secunds} `

    document.getElementById(`time`).innerText=finalTime;
    document.querySelector(`small`).innerText=timeformet;

    setInterval(() => {
        DigitalClock()
    }, 1000);
}

DigitalClock();

