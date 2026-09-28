let temperature = Number(prompt("Haroratni kiriting"));

if (temperature < 0) {
    console.log("Muzlik");
} else if (temperature > 0 && temperature < 30) {
    console.log("Yoqimli harorat");
} else if (temperature > 30) {
    console.log("Juda issiq");
}