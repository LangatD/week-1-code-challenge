let speed = prompt("What is your speed?")
speed = Number(speed)
if (speed < 70){
    console.log("Ok");
} else {
    let demeritPoints = ((speed -70)/5);
    console.log(demeritPoints)
    if (demeritPoints > 12){
        console.log("License suspended")
    }

}