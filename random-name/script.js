const btn = document.querySelector('button');
const div = document.querySelector('div');

const names = ["Emma", "Ava", "Mia", "Amelia", "Charlotte"]

const nameGenerator = () => {
    const index = Math.floor(Math.random() * names.length);
    console.log(names[index]);
    div.innerHTML = `The best name for your child is: <b>${names[index]}</b>`
}

btn.addEventListener('click', nameGenerator);