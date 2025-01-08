var masMark = 78;

var heightMark = 1.69;

var masJohn = 92;

var heightJohn = 1.95;

var bmiMark = masMark / (heightMark * heightMark);

var bmiJohn = masJohn / (heightJohn * heightJohn);

var MarkHigherBMI = bmiMark > bmiJohn;

console.log("Chi so BMI cua Mark la:" + bmiMark);
console.log("Chi so BMI cua John la:" + bmiJohn);
if(MarkHigherBMI == true){
    console.log("Mark's BMI is higher than John's!");
}else{
    console.log("John's BMI is higher than Mark's!");
}