const form = document.querySelector("#signUp")

const button = document.querySelector("#submit")


button.addEventListener("click", (event) => {

    event.preventDefault()

    const fname = form.elements.fname.value
    const lname = form.elements.lname.value
    const email = form.elements.email.value
    const password = form.elements.password.value
    let data = {
        fname: fname,
        lname: lname,
        email: email,
        password: password
    }
    data = JSON.stringify(data)
})

fetch('/signup', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data)
    })
    .catch((error) => {
        console.error('Error:', error)
    })