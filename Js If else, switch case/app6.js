let birthYear = Number(prompt("Tug'ilgan yilingizni kiriting"));

let currentYear = 2026;

let age = currentYear - birthYear;

console.log("Sizning yoshingiz:", age);

if (age < 18) {
    console.log("Voyaga yetmagan");
}