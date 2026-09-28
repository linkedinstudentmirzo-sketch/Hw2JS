let num1 = Number(prompt("1-sonni kiriting"));
let num2 = Number(prompt("2-sonni kiriting"));
let num3 = Number(prompt("3-sonni kiriting"));

if (num1 >= num2 && num1 >= num3) {
    console.log("Eng katta son:", num1);
} else if (num2 >= num1 && num2 >= num3) {
    console.log("Eng katta son:", num2);
} else {
    console.log("Eng katta son:", num3);
}