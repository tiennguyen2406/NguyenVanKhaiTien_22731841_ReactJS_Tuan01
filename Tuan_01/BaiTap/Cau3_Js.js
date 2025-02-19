var dolphinsScores = [96, 108, 89];
var koalasScores = [88, 91, 110];

function Average (arr = []) {
    let sum = 0;   
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

const dolphinsAverage = Average(dolphinsScores);
const koalasAverage = Average(koalasScores);

if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
  console.log("Dolphins win the competition!");
} else if (koalasAverage > dolphinsAverage && koalasAverage >= 100) {
  console.log("Koalas win the competition!");
} else if (dolphinsAverage === koalasAverage && dolphinsAverage >= 100 && koalasAverage >= 100) {
  console.log("It's a draw!");
} else {
  console.log("No team wins the trophy.");
}