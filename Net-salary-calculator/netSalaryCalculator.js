let basicSalary = prompt("How much is your basic salary?");
basicSalary = Number(basicSalary);
let benefits = prompt("enter benefits: ");
benefits= Number(benefits);
let grossSalary = basicSalary + benefits;
console.log(`The grossSalary is ${grossSalary}`)

//PAYE calculation
let paye;
if (grossSalary <= 24000){
    paye = (grossSalary*0.1);   
} else if (grossSalary <= 32,333) { 
    paye = (24000 * 0.10) + ((grossSalary - 24000) * 0.25); 
} else if (grossSalary <= 500000) {
    paye = (24000 * 0.10) + (8333 * 0.25) + ((grossSalary - 32333) * 0.30);
} else if (grossSalary <= 800000){
    paye = (24000 * 0.10) + (8333 * 0.25) + (176667 * 0.30) + ((grossSalary - 500000) * 0.325);
} else {
    paye = (24000 * 0.10) + (8333 * 0.25) + (176667 * 0.30) + (300000 * 0.325) + ((grossSalary - 800000) * 0.35);
}
console.log(`PAYE is ${paye}`)

//NHIF deductions calculation
let NHIFDeductions;
if (grossSalary<= 5999) {
    NHIFDeductions = 150;
} else if (grossSalary<= 7999) {
    NHIFDeductions = 300;
} else if (grossSalary<= 11999) {
    NHIFDeductions = 400;
} else if (grossSalary<= 14999) {
    NHIFDeductions = 500;
} else if (grossSalary<= 19999) {
    NHIFDeductions = 600;
} else if (grossSalary<= 24999) {
    NHIFDeductions = 750;
} else if (grossSalary<= 29999) {
    NHIFDeductions = 850;
} else if (grossSalary<= 34999) {
    NHIFDeductions = 900;
} else if (grossSalary<= 39999) {
    NHIFDeductions = 950;
} else if (grossSalary<= 44999) {
    NHIFDeductions = 1000;
} else if (grossSalary<= 49999) {
    NHIFDeductions = 1100;
} else if (grossSalary<= 59999) {
    NHIFDeductions = 1200;
} else if (grossSalary<= 69999) {
    NHIFDeductions = 1300;
} else if (grossSalary<= 79999) {
    NHIFDeductions = 1400;
} else if (grossSalary<= 89999) {
    NHIFDeductions = 1500;
} else if (grossSalary<= 99999) {
    NHIFDeductions = 1600;
} else {
    NHIFDeductions = 1700;
}
console.log(`The NHIF deduction is ${NHIFDeductions}`)

// NSSF Calculation
let nssfDeduction;
if (basicSalary <= 7000) {
    nssfDeduction = basicSalary * 0.06; 
} else {
    nssfDeduction = (7000 * 0.06) + ((basicSalary - 7000) * 0.06);
}
console.log(`The nssf deduction is ${nssfDeduction}`)

let netSalary;
netSalary = grossSalary - NHIFDeductions - paye -nssfDeduction;
console.log(`The net salary is ${netSalary}`)