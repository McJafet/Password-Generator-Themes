const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 16;
let buttonGenerator = document.getElementById("button-Generator");
let toggle = document.getElementById("toggle");
let main = document.getElementById("main_toggle");
let section = document.getElementById("section_toggle");
const generatePassword = () => {{
    let pswd = "";
    for (let i = 0; i < passwordLength; i++) {
        let random = Math.floor(Math.random() * characters.length);
        pswd += characters[random];
    }
    return pswd;
    }
}

buttonGenerator.addEventListener('click', function() {
    for (let i = 1; i < 5; i++) {
        let password = document.getElementById("password" + i);
        password.textContent = generatePassword();
    }   
});

toggle.addEventListener('click', function() {
    toggle.classList.toggle('active');
    main.classList.toggle('active');
    section.classList.toggle('active');
});