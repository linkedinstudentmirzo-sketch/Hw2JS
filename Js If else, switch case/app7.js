let login = prompt("Loginni kiriting");
let password = prompt("Parolni kiriting");

if (login === "admin" && password === "1234") {
    console.log("Hush kelibsiz!");
} else {
    console.log("Login yoki parol noto'g'ri");
}