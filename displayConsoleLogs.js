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
