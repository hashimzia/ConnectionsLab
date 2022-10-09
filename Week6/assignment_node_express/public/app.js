let container = document.querySelector('.container')

let form = document.getElementById('form')
form.addEventListener('input', (event) => {
    event.preventDefault();
    let selectby = document.getElementById('searchby');
    let searchby = selectby.value;
    let textInput = document.getElementById('search');
    let value = textInput.value;
    fetch(`/movies?${searchby}=${value}`)
        .then(res => res.json())
        .then(data => {
            create(data);
        })

})

fetch("/movies")
    .then(res => res.json())
    .then(data => {
        create(data);

    })

function create(movies) {
    document.querySelector('.container').remove();
    let container2 = document.createElement('div');
    container2.classList.add('container');
    let body = document.querySelector('body');
    body.appendChild(container2);
    console.log(movies);
    for (let movie in movies) {
        console.log(movie);
        let section = document.createElement('section');
        section.classList.add('card');
        let h2 = document.createElement('h2');
        h2.innerHTML = movies[movie].title;
        let year = document.createElement('p');
        year.innerHTML = `Released: ${movies[movie].year}`;
        let imdb = document.createElement('p');
        imdb.innerHTML = `IMDB: ${movies[movie].imdb}`;
        let creator = document.createElement('p');
        creator.innerHTML = `Creator: ${movies[movie].creator}`;
        let stars = document.createElement('p');
        stars.innerHTML = `Staring: ${movies[movie].stars.join(', ')}`;
        let img = document.createElement('img');
        img.src = movies[movie].img;
        img.style.maxWidth = '360px';

        section.appendChild(h2);
        section.appendChild(img);
        section.appendChild(year);
        section.appendChild(imdb);
        section.appendChild(stars);
        if (movies[movie].creator)
            section.appendChild(creator);

        container2.appendChild(section);
    }

}