let playButton = document.querySelector('button');
let higher = document.querySelector("#higher");
document.body.addEventListener('click', () => {
    fade = 0;
})
const delay = ms => new Promise(res => setTimeout(res, ms));
setTimeout(() => {
    let canvas = document.querySelector('canvas');
    canvas.classList.add('hidden');
}, 100);

playButton.addEventListener('click', () => {
    canvas.classList.remove('hidden');
    let main = document.querySelector('main');
    main.remove();
    document.querySelector("#part1").after(main);
    divs = document.querySelectorAll('.hidden')
    document.querySelector('#start').remove();
    for (let div of divs) {
        div.classList.remove('hidden');
    }
    let rand1 = Math.floor(Math.random() * 600);
    let rand2 = Math.floor(Math.random() * 600);
    name1 = document.querySelector("#name1");
    name2 = document.querySelector("#name2");
    stat1 = document.querySelector("#stat1");
    stat2 = document.querySelector("#stat2");
    img1 = document.querySelector("#pkimg1");
    img2 = document.querySelector("#pkimg2");

    compare = document.querySelector("#comparison");
    fetch(`https://pokeapi.co/api/v2/pokemon/${rand1}`)
        .then((response) => response.json())
        .then((data) => {
            name1.innerHTML = data.name;
            base_stat_total_1 = 0;
            for (let stat of data.stats) {
                base_stat_total_1 += stat.base_stat;
            }
            stat1.innerHTML = base_stat_total_1;
            img1.src = `/sprites/${data.name}.gif`
        });
    fetch(`https://pokeapi.co/api/v2/pokemon/${rand2}`)
        .then((response) => response.json())
        .then((data) => {
            name2.innerHTML = data.name;
            base_stat_total_2 = 0;
            for (let stat of data.stats) {
                base_stat_total_2 += stat.base_stat;
            }
            img2.src = `/sprites/${data.name}.gif`
        })
    higher.addEventListener('click', async () => {
        let i = 0;
        for (i = 0; i < base_stat_total_2; i++) {
            stat2.innerHTML = i;
            await delay(3);
        }
        stat2.innerHTML = base_stat_total_2;
        if (base_stat_total_2 >= base_stat_total_1) {
            correct = true;
            setTimeout(() => {
                swap();
                randomize();
            }, 1000)
        }
        else {
            correct = false;
        }
    })
    lower.addEventListener('click', async () => {
        let i = 0;
        for (i = 0; i < base_stat_total_2; i++) {
            stat2.innerHTML = i;
            await delay(3);
        }
        stat2.innerHTML = base_stat_total_2;
        if (base_stat_total_2 <= base_stat_total_1) {
            correct = true;
            setTimeout(() => {
                swap();
                randomize();
            }, 1000)
        }
        else {
            correct = false;

        }
    })
})

function randomize() {
    let rand1 = Math.floor(Math.random() * 900);
    let rand2 = Math.floor(Math.random() * 900);
    name1 = document.querySelector("#name1");
    name2 = document.querySelector("#name2");
    stat1 = document.querySelector("#stat1");
    compare = document.querySelector("#comparison");
    // fetch(`https://pokeapi.co/api/v2/pokemon/${rand1}`)
    //     .then((response) => response.json())
    //     .then((data) => {
    //         name1.innerHTML = data.name;
    //         base_stat_total_1 = 0;
    //         for (let stat of data.stats) {
    //             base_stat_total_1 += stat.base_stat;
    //         }
    //         stat1.innerHTML = base_stat_total_1;
    //         console.log(base_stat_total_1);
    //         compare.innerHTML = `than the base stat total of ${data.name}`;
    //     });
    fetch(`https://pokeapi.co/api/v2/pokemon/${rand2}`)
        .then((response) => response.json())
        .then((data) => {
            name2.innerHTML = data.name;
            base_stat_total_2 = 0;
            for (let stat of data.stats) {
                base_stat_total_2 += stat.base_stat;
            }
            img2.src = `/sprites/${data.name}.gif`
        });
    correct = null;
}

function swap() {
    name1 = document.querySelector("#name1");
    name2 = document.querySelector("#name2");
    name1.innerHTML = name2.innerHTML;
    stat1.innerHTML = base_stat_total_2;
    stat2.innerHTML = "?";
    base_stat_total_1 = base_stat_total_2;
    img1.src = img2.src;

}