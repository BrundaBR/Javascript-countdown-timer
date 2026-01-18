let bday_date = new Date("6 Mar 2026");
console.log("My birthday is on " +  new Date(bday_date));

function counter(){
    current_date  = new Date();
    let seconds_left = Math.floor((bday_date - current_date) / 1000);
    let days = Math.floor(seconds_left / 86400);
    let hours = Math.floor((seconds_left % 86400) / 3600);
    let minutes = Math.floor((seconds_left % 3600) / 60);
    seconds_left = seconds_left % 60;
    console.log(`Time left until my birthday: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds_left} seconds`);
    document.getElementById("days").innerText =days;
    document.getElementById("hours").innerText =hours;
    document.getElementById("minutes").innerText =minutes;
    document.getElementById("seconds").innerText =seconds_left; 

}

counter();
setInterval(counter,1000);