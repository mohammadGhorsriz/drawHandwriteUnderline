/** @format */

function getRandom(startNum, endNum) {
    let range = endNum - startNum;
    let randNum = Math.floor(Math.random() * range) + startNum;
    return randNum;
}

let interval = null;

function drawUnderline(element) {
    const canvas = document.createElement("canvas");
    //set width and height of canvas properly ,based on width and height of element
    let widthOfElement = element.currentTarget.offsetWidth;
    let heightOfElement = element.currentTarget.offsetHeight;
    // console.log(widthOfElement, heightOfElement);
    canvas.width = widthOfElement;
    canvas.height = 10;

    // add css property to canvas
    canvas.classList.add("handwriteUnderlineStyle");

    element.currentTarget.parentNode.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    let x = 0;
    let y = 5;
    // set length of line
    let lengthOfElement = widthOfElement;
    ctx.moveTo(x, y);
    if (interval) clearInterval(interval);
    interval = setInterval(() => {
        if (x > lengthOfElement) clearInterval(interval);
        console.log("time interval invoke");
        ctx.lineTo(x, y);
        ctx.stroke();
        x += getRandom(5, 10);
        y = 5 + getRandom(-1, 1);
    }, 20);
}
function deleteUnderline(element) {
    const canvas = document.querySelector(".handwriteUnderline + canvas");
    // console.log(canvas);
    element.currentTarget.parentNode.removeChild(canvas);
}

// select all element and add them proper even listener
var elements = document.querySelectorAll(".handwriteUnderline");

for (element of elements) {
    element.addEventListener("mouseenter", (e) => {
        drawUnderline(e);
    });
    element.addEventListener("mouseleave", (e) => {
        deleteUnderline(e);
    });
}
