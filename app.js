console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count){
    if(count < 0){
        count * -1;
    }
    for(let i = 0; i <= count; i++){
        if(i % 2 !== 0){
            console.log(i);
        }
    }
}

printOdds(30);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName, age){
    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

    if(age >= 16){
        console.log(aboveSixteen);
    }
    else{
        console.log(belowSixteen);
    }
}

checkAge('Carly', 33);

// Exercise 3 section
console.log("EXERCISE 3:\n============\n");
function whichQuadrant(coordX, coordY){
    if(coordX >= 0 && coordY >= 0){
        console.log(`Quadrant I`)
    }
    else if(coordX < 0 && coordY >= 0){
        console.log(`Quadrant II`)
    }
    else if(coordX < 0 && coordY < 0){
        console.log(`Quadrant III`)
    }
    else if(coordX > 0 && coordY < 0){
        console.log(`Quadrant IV`)
    }
}

whichQuadrant(-1, -5)

// Exercise 4 section
console.log("EXERCISE 4:\n============\n");
function triangleType(sideOne, sideTwo, sideThree){
    if(sideOne + sideTwo < sideThree || sideOne + sideThree < sideTwo || sideTwo + sideThree < sideOne){
        console.log(`Invalid for a triangle`);
    }
    else if(sideOne == sideTwo && sideThree == sideOne && sideThree == sideTwo){
        console.log(`Equilateral triangle`);
    }
    else {
        console.log(`isoceles`);
    }
}

triangleType(10, 10, 11)

// Exercise 5 section
console.log("EXERCISE 5:\n============\n");
let dailyLimit = 0;
let daysRemaining = 0;
let usagePerDay = 0;
let dataUseNotification = "";
let messageAboutUseTrend = "";
let exceedBy = 0;
let useOnly = 0;
let dataRemaining = 0;
function dataPlanStatus(planLimit, day, usage){
    dailyLimit = planLimit / 30; 
    //how much data is left
    dataRemaining = planLimit - usage
    daysRemaining = 30 - day;
    usagePerDay = usage / day;
    exceedBy = -(planLimit - (usage + (usagePerDay * (30 - day))));
    //how much, on average, they can use per day for the rest of the month.
    useOnly = dataRemaining / (30 - day);
    //The function should compute whether the user is over, under, or right on the average daily usage under the plan.

    if(usage > planLimit){
        console.log("You are out of data")
    }
    else if(usagePerDay > dailyLimit){
        dataUseNotification = "EXCEEDING";
        messageAboutUseTrend = "Continuing this usage, you'll exceed your data plan"
    }
    else if(usagePerDay == dailyLimit){
        dataUseNotification = "Right on target for";
        messageAboutUseTrend = "Continuing this usage, you'll exceed your data plan"
    }
    else{
        dataUseNotification = "UNDER"
        messageAboutUseTrend = "Continuing this usage, you'll under-use your data plan"
    }


    console.log(`Your total data available for each 30 day plan period is ${planLimit}GB. That would be a daily average of 3.333GB/day.\nYou are on day ${day} of the period and you have used ${usage}GB. Your are ${dataUseNotification} your average daily use, using ${usagePerDay}GB/Day.\n${messageAboutUseTrend} by ${exceedBy}GB.\nTo stay below your data plan, use no more than ${useOnly} GB/Day.`)
    }

    dataPlanStatus(100, 15, 56);
