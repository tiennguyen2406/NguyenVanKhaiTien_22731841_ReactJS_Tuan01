var bill_val = 275.40;
var tip = bill_val >= 50 && bill_val <= 300 ? bill_val * 0.15 : bill_val * 0.2;
var total = bill_val + tip;
console.log(`The bill was ${bill_val}, the tip was ${tip}, and the total value ${total}`);

