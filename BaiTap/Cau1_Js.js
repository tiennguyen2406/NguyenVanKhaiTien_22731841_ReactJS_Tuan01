var masMark = 78;

var heightMark = 1.69;

var masJohn = 92;

var heightJohn = 1.95;

var bmiMark = masMark / (heightMark * heightMark);

var bmiJohn = masJohn / (heightJohn * heightJohn);

var MarkHigherBMI = bmiMark > bmiJohn;

console.log("Chi so BMI cua Mark la:" + bmiMark);
console.log("Chi so BMI cua John la:" + bmiJohn);
console.log("Chi so BMI cua Mark lon hon chi so BMI cua John?: " + MarkHigherBMI);