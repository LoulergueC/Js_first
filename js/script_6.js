function script_6() {
    var ARN = prompt("Quel est l'ARN à traduire ?");
    if (ARN.length % 3 != 0) {
        return "Ce n'est pas un ARN valide ! (multiple de 3 attendu)";
    }
    console.log(ARN);

    let output = [];
    let ARNSliced = ARN.match(/.{3}/g);
    console.log(ARNSliced);

    for (let i = 0; i < ARNSliced.length; i++) {
        switch (ARNSliced[i]) {
            case "UUU":
            case "UUC":
                output.push("Phénylalanine");
                break;
            case "UCU":
            case "UCC":
            case "UCA":
            case "UCG":
            case "AGU":
            case "AGC":
                output.push("Sérine");
                break;
            case "UAU":
            case "UAC":
                output.push("Tyrosine");
                break;
            case "CCU":
            case "CCA":
            case "CCC":
            case "CCG":
                output.push("Proline");
                break;
            case "UUA":
            case "UUG":
                output.push("Leucine");
                break;
            case "CGU":
            case "CGC":
            case "CGA":
            case "CGG":
            case "AGA":
            case "AGG":
                output.push("Arginine");
                break;
        }
    }
    console.log(output);

    return output.join("-");
}
