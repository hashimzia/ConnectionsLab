playButton = document.querySelector('button');
playButton.addEventListener('click', () => {
    divs = document.querySelectorAll('.hidden')
    document.querySelector('#start').remove();
    for (let div of divs) {
        div.classList.remove('hidden');
    }
    let rand1 = Math.floor(Math.random() * 151);
    name1 = document.querySelector("#name1")
    fetch(`https://pokeapi.co/api/v2/pokemon/${rand1}`)
        .then((response) => response.json())
        .then((data) => {
            name1.innerHTML = data.name;
        });
})