// Display console logs and in the pre following buttons
function displayConsoleLogs() {
    let script_id = this.getAttribute("data-id");
    let output = eval(script_id + "()");

    let pre = document.getElementById(script_id);
    pre.innerHTML = output;
    pre.innerHTML =
        "<span class='line'>" +
        pre.textContent
            .split("\n")
            .filter(Boolean)
            .join("</span>\n<span class='line'>") +
        "</span>";

    console.log(output);
}
buttons = document.getElementsByTagName("button");
for (let i = 0; i < buttons.length; i++) {
    if (i != 7) {
        buttons[i].addEventListener("click", displayConsoleLogs);
    }
}
