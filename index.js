import { fifaData } from './fifa.js';

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Investigate the data above. Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/
const finals2014 = fifaData.filter(function(item){
    return item.Year === 2014 && item.Stage === 'Final';
});

// console.log('Task 1', finals2014)
//(a) Home Team name for 2014 world cup final
console.log(`Home Team name for 2014 world cup final,`, finals2014[0]['Home Team Name'])
//(b) Away Team name for 2014 world cup final
console.log(`Away Team name for 2014 world cup final,`, finals2014[0]['Away Team Name'])
//(c) Home Team goals for 2014 world cup final
console.log(`Home Team goals for 2014 world cup final,`, finals2014[0]['Home Team Goals'])
//(d) Away Team goals for 2014 world cup final
console.log(`Away Team goals for 2014 world cup final,`, finals2014[0]['Away Team Goals'])
//(e) Winner of 2014 world cup final */


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
   return data.filter(item => item.Stage === "Final"); 
}

// console.log('Task 2', getFinals(fifaData));

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(getFinalsCB) {
    const years = getFinalsCB.map(item => item.Year);
    return years
}


// console.log('Task 3', getYears(getFinals(fifaData)))

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(getFinalsCB) {
 const winners = getFinalsCB.map(item => {
     if(item["Home Team Goals"] > item["Away Team Goals"]){
         return (item["Home Team Name"]);
     } 
     else if (item["Home Team Goals"] < item["Away Team Goals"]){
        return (item["Away Team Name"]);
     }
 })
 return winners
}

console.log('Task 4', getWinners(getFinals(fifaData)))


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears 
 */

function getWinnersByYear(fifaData, getYearsCB, getWinnersCB) {

   const worldCup = getWinnersCB(fifaData).map(function(item, index){
       return `In ${getYearsCB(getYearsCB)[index]}, ${item} won the world cup!`
   })
   return worldCup;
   
    // const worldCupArray = dataCB.map(function(item, index){
    //     return `In ${getYearsCB[index]}, ${item} won the world cup!`
    // })
    // return (worldCupArray);


    // dataCB.map(function(item,index){
    //     return `${getWinnersCB(getYearsCB(dataCB))}, ${getYearsCB(dataCB)}`;
    // })
    // return `${getWinnersCB(getYearsCB(dataCB))}, ${getYearsCB(dataCB)}`;
    //  return (`In ${getYearsCB[index]}, ${item} won the world cup!`)
    }


// console.log('Task 5', getWinnersByYear(getFinals(fifaData)),getYears(getFinals(fifaData)));

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
   const totalTeamGoals = data.reduce(function(accumulator, item){
    return accumulator + item["Home Team Goals"] + item["Away Team Goals"]
   },0)
   return (totalTeamGoals / data.length).toFixed(2)
}






/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

}



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
export default{
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}