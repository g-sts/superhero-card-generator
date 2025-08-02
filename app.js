const img = document.getElementById('hero-image');
const name = document.getElementById('hero-name');
const button = document.getElementById('btn-pick');

function randomNumber(){
    return Math.floor(Math.random() * 731) + 1;
}

button.addEventListener('click', function(){
    const id = randomNumber();
    const url = `https://superheroapi.com/api.php/ab20f884622d21f451ff01bbbbc975e9/${id}`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            img.src = data.image.url
            img.style.display = 'block';
            name.textContent = data.name
        })
        .catch(error => {
            Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
        });
    });
});


