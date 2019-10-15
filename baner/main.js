const slideList = [{
        img: "images/img1.jpg",
        text: 'Pierwszy tekst'
    },
    {
        img: "images/img2.jpg",
        text: 'Drugi tekst'
    },
    {
        img: "images/img3.jpg",
        text: 'Trzeci tekst'
    }
];

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')]

// Settings
const time = 3000;
let active = 0;

const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
}

const changeSlide = () => {
    active++;

    if (active > slideList.length - 1) {
        active = 0;
    }

    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot();
}

let indexInterval = setInterval(changeSlide, time);

const keyChangeSlide = (e) => {
    switch (e.keyCode) {
        case 37: // Left - slide -
            clearInterval(indexInterval);
            active--;
            if (active < 0) {
                active = slideList.length - 1;
            }
            image.src = slideList[active].img;
            h1.textContent = slideList[active].text;
            changeDot();
            indexInterval = setInterval(changeSlide, time)
            break

        case 39: // Right - slide +
            clearInterval(indexInterval);
            active++;
            if (active > slideList.length - 1) {
                active = 0;
            }
            image.src = slideList[active].img;
            h1.textContent = slideList[active].text;
            changeDot();
            indexInterval = setInterval(changeSlide, time)
            break
    }

}

window.addEventListener('keydown', keyChangeSlide);