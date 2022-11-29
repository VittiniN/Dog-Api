const dog_results = document.getElementById('dog_results');
const dog_btn = document.getElementById('dog_btn');

dog_btn.addEventListener('click', getRandomDog)



function getRandomDog(){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(data => {
        dog_results.innerHTML = `<img src= "${data.message}"/>`
    })
}
