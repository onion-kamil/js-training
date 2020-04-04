const patterns = {
    username: /^[a-z\d]{5,12}$/i,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]+)(\.[a-z]{2,8})?$/,
    password: /^[\w]{8,20}$/,
    telephone: /^\d{9}$/,
    slug: /^[a-z\d-]{8,20}$/
}

const inputs = document.querySelectorAll("input")

const validate = (field) => {
    console.log(field)
    const name = field.name
    const value = field.value;


    const pattern = patterns[name]
    const result = pattern.test(value)
    console.log(result)


    if (result) {
        field.classList.add('valid')
        field.classList.remove('invalid')
    } else {
        field.classList.add('invalid')
        field.classList.remove('valid')
    }
}


inputs.forEach((input) => {
    input.addEventListener("input", (e) => {
        validate(e.target)
    })
})