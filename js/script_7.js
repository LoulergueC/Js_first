function script_7() {
    alert("Pour arréter le bot, tapper 'exit'");

    function consoleLog(msg) {
        console.log(msg);
        document.getElementById("script_7").innerHTML +=
            "<span class='line'>" + msg + "</span>\n";
    }

    while (true) {
        let phrase = prompt("Entrez une phrase");
        consoleLog("Vous : " + phrase);
        if (phrase === "exit") {
            break;
        }
        if (phrase.slice(-1) == "?") {
            consoleLog("AcnéBot : Ouais ouais...");
        } else if (phrase === phrase.toUpperCase() && phrase !== "") {
            consoleLog("AcnéBot : Pwa, calme-toi...");
        } else if (phrase.includes("Fortnite")) {
            consoleLog("AcnéBot : on s' fait une partie soum-soum ?");
        } else if (phrase === "") {
            consoleLog("AcnéBot : t'es en PLS ?");
        } else {
            consoleLog("AcnéBot : balek");
        }
    }
}
