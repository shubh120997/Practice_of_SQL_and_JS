const prompt = require("prompt-sync")();

const open_time = 10;
const close_time = 19;
const days = ['mon', 'tue', 'wed', 'thu', 'fri'];

let day = prompt("Enter the day: ").slice(0,3).toLowerCase();


if(days.includes(day)){
    let time = prompt("Enter the time: ");
    if(day !='fri'){
        if(time < open_time){
            console.log(`Office will be open after ${open_time - time} hour at 10AM`);
        }
        else if(time >= open_time && time <= close_time){
            console.log(`Office is open for ${close_time - time} hours`);
        }
        else{
            console.log(`Office will be open after ${(24-time)+10} hours at 10AM`);
        }
    }
    else{
        if(time < open_time){
            console.log(`Office will be open after ${open_time - time} hour at 10AM`);
        }
        else if(time >= open_time && time <= close_time){
            console.log(`Office is open for ${close_time - time} hours`);
        }
        else{
            console.log("Office is close till Monday 10AM.");
        }
    }
}
else{
    console.log("Office is close till Monday 10AM.");
}



