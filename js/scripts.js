let margin = 0;
let container, digit, light0, light1, light2, light3, light4, light5, light6, val, element, light;
window.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && margin != 0) {
        document.getElementById("digit-" + margin).remove();
        margin = margin - 100;
    } else {
        if (!(e.keyCode > 31 && (e.keyCode < 48 || e.keyCode > 57))) {
            createDigit(e.key);
        }
    }
});

function createDigit(key) {
    container = document.querySelector(".container");
    digit = document.createElement("div");
    margin = margin + 100;
    digit.id = "digit-" + margin;
    digit.style.marginLeft += margin + "px";
    digit.className = "digit";
    light0 = document.createElement("div");
    light0.className = "light-color horizontal";
    light0.id = "light-0";
    light1 = document.createElement("div");
    light1.className = "light-color vertical";
    light1.id = "light-1";
    light2 = document.createElement("div");
    light2.className = "light-color vertical";
    light2.id = "light-2";
    light3 = document.createElement("div");
    light3.className = "light-color horizontal";
    light3.id = "light-3";
    light4 = document.createElement("div");
    light4.className = "light-color vertical";
    light4.id = "light-4";
    light5 = document.createElement("div");
    light5.className = "light-color vertical";
    light5.id = "light-5";
    light6 = document.createElement("div");
    light6.className = "light-color horizontal";
    light6.id = "light-6";
    digit.appendChild(light0);
    digit.appendChild(light1);
    digit.appendChild(light2);
    digit.appendChild(light3);
    digit.appendChild(light4);
    digit.appendChild(light5);
    digit.appendChild(light6);
    container.appendChild(digit);
    setDigit(margin, key);
}

function setDigit(margin, key) {
    let col = ["1111110", "0110000", "1101101", "1111001", "0110011", "1011011", "1011111", "1110000", "1111111", "1111011"];
    let select = col[key];
    if (select != undefined) {
        for (let m = 0; m < select.length; m++) {
            val = select.charAt(m);
            element = "#digit-" + margin + " div#light-" + m
            light = document.querySelector(element);
            light.style['background'] = val != 0 ? "#010101" : "rgb(220, 221, 224)";
        }
    }
}