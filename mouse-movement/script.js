const h1 = document.body.querySelector('h1');

const getColor = (event) => {

    const x = event.clientX;
    const y = event.clientY;
    const xEven = x % 2 === 0;
    const yEven = y % 2 === 0;

    // If both even
    if (xEven && yEven) {
        return "red"
    } else if (!xEven && !yEven) { // If both not even
        return "blue"
    } else if (!xEven || !yEven && xEven || yEven) { // If once is odd
        console.log(x, y);
        return "green";
    }
}

document.body.addEventListener('click', (event) => {
    const color = getColor(event);
    h1.style.backgroundColor = color;
})

document.body.addEventListener('mousemove', (event) => {

    const x = event.clientY;
    const y = event.clientX;
    const width = window.innerWidth;
    const height = window.innerHeight;

    h1.textContent = `${event.clientX} ${event.clientY}`;

    // Background colors - generate
    const red = x / width * 100;
    const green = y / height * 100;
    const blue = ((x / width * 100) + (y / height * 100)) / 2;

    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
})