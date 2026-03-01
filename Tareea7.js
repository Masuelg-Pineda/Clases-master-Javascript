const passwordInput = document.getElementById("password");
const lengthInput = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const strengthBar = document.getElementById("strengthBar");

const uppercaseCheck = document.getElementById("uppercase");
const lowercaseCheck = document.getElementById("lowercase");
const numbersCheck = document.getElementById("numbers");
const symbolsCheck = document.getElementById("symbols");

lengthInput.addEventListener("input", () => {
    lengthValue.textContent = lengthInput.value;
});

generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyPassword);

function generatePassword() {

    let length = lengthInput.value;
    let chars = "";

    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}<>?/";

    if (uppercaseCheck.checked) chars += uppercase;
    if (lowercaseCheck.checked) chars += lowercase;
    if (numbersCheck.checked) chars += numbers;
    if (symbolsCheck.checked) chars += symbols;

    if (chars === "") {
        alert("Selecciona al menos una opción");
        return;
    }

    let password = "";

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    passwordInput.value = password;
    checkStrength(password);
}

function copyPassword() {
    navigator.clipboard.writeText(passwordInput.value);
    alert("Contraseña copiada");
}

function checkStrength(password) {

    let strength = 0;

    if (password.length >= 12) strength++;
    if (uppercaseCheck.checked) strength++;
    if (numbersCheck.checked) strength++;
    if (symbolsCheck.checked) strength++;

    if (strength <= 1) {
        strengthBar.style.background = "red";
    } else if (strength === 2) {
        strengthBar.style.background = "orange";
    } else if (strength === 3) {
        strengthBar.style.background = "yellow";
    } else {
        strengthBar.style.background = "green";
    }
}