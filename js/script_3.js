function script_3() {
    let level = prompt(
        "Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"
    );
    level = parseInt(level);

    let output = "";

    if (isNaN(level)) {
        return "Ce n'est pas un nombre !";
    } else if (level <= 0) {
        return "Le nombre d'étages doit être positif !";
    } else {
        for (let i = 1; i <= level; i++) {
            output += " ".repeat(level - i) + "#".repeat(i) + "\n";
        }

        return output;
    }
}
