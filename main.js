const cat_result = document.querySelector('#cat_result');
const dog_result = document.querySelector('#dog_result');
const catBtn = document.querySelector('#cat_btn');
const dogBtn = document.querySelector('#dog_btn');

catBtn.addEventListener('click', getRandomCat);

function getRandomCat() {
    const url = "https://api.thecatapi.com/v1/images/search";

    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data[0].url);
        cat_result.innerHTML = `<img src=${data[0].url} alt="cat">`
    });
}

dogBtn.addEventListener('click', getRandomDog);

function getRandomDog() {
    const url = "https://dog.ceo/api/breeds/image/random";

    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data.message);
        dog_result.innerHTML = `<img src=${data.message} alt="dog">`
    });
}