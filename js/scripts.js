
function setDigit(digit, digitId, container) {
    let col = ["1111110", "0110000", "1101101", "1111001", "0110011", "1011011", "1011111", "1110000", "1111111", "1111011"];
    let select = col[digit];
    if (select != undefined) {
        for (let m = 0; m < select.length; m++) {
            let val = select.charAt(m);
            let light = document.querySelector(`.${container} #digit-${digitId} .light-${m}`);
            light.style['background'] = val != 0 ? "#010101" : "rgb(220, 221, 224)";
        }
    }
}

function createDigit(container, value) {
    container.innerHTML = "";
    let digit, light, subValue, lightClass = "", margin = 0;
    for (let i = 0; i < value.length; i++) {
        digit = document.createElement("div");
        digit.id = `digit-${i}`;
        digit.className = "digit"
        digit.style.marginLeft = `${margin}px`;
        subValue = value.charAt(i);
        for (let j = 0; j < 7; j++) {
            light = document.createElement("div");
            if (j === 0 || j === 3 || j === 6) {
                lightClass += "horizontal";
            } else {
                lightClass += "vertical";
            }
            light.className = `light-${j} light ${lightClass}`;
            lightClass = "";
            digit.appendChild(light);
        }
        container.appendChild(digit);
        setDigit(subValue, i, container.className);
        margin += 100;
    }
}
var container = document.getElementsByClassName("container")[0];
let i = 0;
setInterval(() => { createDigit(container, "" + i++) }, 1);



