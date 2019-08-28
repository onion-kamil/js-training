let heightSize = 0;
let grow = false;

const div = document.createElement("div");
document.body.appendChild(div);

// Div style
div.style.position = "fixed";
document.body.style.height = "10000px";
div.style.width = "100%";
div.style.height = `${heightSize}px`;
div.style.top = "0";
div.style.left = "0";
div.style.backgroundColor = "black";
div.style.transform = "";

const changeHeight = function () {

    if (heightSize >= window.innerHeight / 2) {
        grow = !grow;
    } else if (heightSize == 0) {
        grow = !grow;
    }

    if (grow) {
        heightSize += 10;
        div.style.backgroundColor = "yellow"
    } else {
        heightSize -= 10;
        div.style.backgroundColor = "green"
    }
    div.style.height = `${heightSize}px`;
}

window.addEventListener("scroll", changeHeight);