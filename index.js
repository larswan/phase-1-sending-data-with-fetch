// Add your code here

    let userForm = document.getElementById("user-form")
    userForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        
        let req = await fetch("http://localhost:3000/users", {
            method: "POST",
            headers: { 'Content-Type': 'application/json',
                        "Accept": "application/json"},
            body: JSON.stringify({email: `${e.target.email.value}`, password: `${e.target.name.value}`})
        })
        
    })

fetch("http://localhost:3000/users", configurationObject)
    .then(function (response) {
        return response.json();
    })
    .then(function (object) {
        console.log(object);
    });
