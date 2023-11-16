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
