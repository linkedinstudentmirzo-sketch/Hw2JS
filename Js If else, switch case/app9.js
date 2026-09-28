let hour = Number(prompt("Soatni kiriting"));

if (hour >= 6 && hour < 12) {
    console.log("Ertalab");
} else if (hour >= 12 && hour < 18) {
    console.log("Kunduzi");
} else if (hour >= 18 && hour <= 24 || hour >= 0 && hour < 6) {
    console.log("Kechasi");
}