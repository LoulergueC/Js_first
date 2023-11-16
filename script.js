function script_1() {
    return "Bonjour, monde !";
}

function script_1_2() {
    let name = prompt("Quel est ton prénom ?");
    return "Bonjour, " + name + " !";
}

function script_2() {
    let x = prompt("De quel nombre veux-tu calculer la factorielle ?");
    function factorielle(x) {
        let result = x;
        if (x < 0) {
            return "indefinie";
        } else if (x == 0) {
            return 1;
        } else {
            while (x > 1) {
                x--;
                result = x * result;
            }
            return result;
        }
    }
    return "Le résultat de la factorielle de " + x + " est : " + factorielle(x);
}

// Display console logs and in the pre following buttons
function displayConsoleLogs() {
    let script_id = this.getAttribute("data-id");
    let output = eval(script_id + "()");

    document.getElementById(script_id).innerHTML = output;

    console.log(output);
}
buttons = document.getElementsByTagName("button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", displayConsoleLogs);
}
