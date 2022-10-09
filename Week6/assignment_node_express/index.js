const e = require('express');
const express = require('express');
const app = express();

// movies = {
//     "the boys": {
//         "title": "The Boys",
//         "creator": "Eric Kripke",
//         "imdb": 8.7,
//         "year": 2019,
//         "stars": ["Karl Urban", "Jack Quaid", "Antony Starr"],
//         "img": "https://m.media-amazon.com/images/M/MV5BOTEyNDJhMDAtY2U5ZS00OTMzLTkwODktMjU3MjFkZWVlMGYyXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg"
//     },
//     "the flash": {
//         "title": "The Flash",
//         "creator": "Andrew Criesberg",
//         "imdb": 7.6,
//         "year": 2014,
//         "stars": ["Grant Gustin", "Candice Patton", "Danielle Panabaker"],
//         "img": "https://m.media-amazon.com/images/M/MV5BMDIzNzYwNTctZWY4Mi00YjQ2LWI5YWYtMzdmNDgwMGI4Yzk1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg"
//     },
//     "avatar": {
//         "title": "Avatar: The Last Airbender",
//         "creator": "Bryke",
//         "imdb": 9.3,
//         "year": 2005,
//         "stars": ["Dee Bradlee Baker", "Zach Tyler Eisen", "Mae Whitman"],
//         "img": "https://images.justwatch.com/poster/196798270/s718/avatar-the-last-airbender.%7Bformat%7D"
//     },
//     "rick and morty": {
//         "title": "Rick and Morty",
//         "creator": "Dan Harmon",
//         "imdb": 9.2,
//         "year": 2013,
//         "stars": ["Justin Roiland", "Chris Parnell", "Spencer Grammer"],
//         "img": "https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_.jpg"
//     },
//     "sherlock": {
//         "title": "Sherlock",
//         "year": 2010,
//         "creator": "Mark Gatiss",
//         "imdb": 9.1,
//         "year": 2010,
//         "stars": ["Benedict Cumberbatch", "Martin Freeman", "Una Stubbs"],
//         "img": "https://m.media-amazon.com/images/M/MV5BMWY3NTljMjEtYzRiMi00NWM2LTkzNjItZTVmZjE0MTdjMjJhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTQ4NTc5OTU@._V1_FMjpg_UX1000_.jpg"
//     },
//     "death note": {
//         "title": "Death Note",
//         "year": 2009,
//         "imdb": 9.0,
//         "stars": ["Mamoru Miyano", "Brad Swalie", "Vincent Tong"],
//         "img": "https://m.media-amazon.com/images/M/MV5BNjRiNmNjMmMtN2U2Yi00ODgxLTk3OTMtMmI1MTI1NjYyZTEzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg"
//     }
// }
a
let movies = [
    {
        "title": "The Boys",
        "creator": "Eric Kripke",
        "imdb": 8.7,
        "year": 2019,
        "stars": ["Karl Urban", "Jack Quaid", "Antony Starr"],
        "img": "https://m.media-amazon.com/images/M/MV5BOTEyNDJhMDAtY2U5ZS00OTMzLTkwODktMjU3MjFkZWVlMGYyXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg"
    },
    {
        "title": "The Flash",
        "creator": "Andrew Criesberg",
        "imdb": 7.6,
        "year": 2014,
        "stars": ["Grant Gustin", "Candice Patton", "Danielle Panabaker"],
        "img": "https://m.media-amazon.com/images/M/MV5BMDIzNzYwNTctZWY4Mi00YjQ2LWI5YWYtMzdmNDgwMGI4Yzk1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg"
    },
    {
        "title": "Avatar: The Last Airbender",
        "creator": "Bryke",
        "imdb": 9.3,
        "year": 2005,
        "stars": ["Dee Bradlee Baker", "Zach Tyler Eisen", "Mae Whitman"],
        "img": "https://images.justwatch.com/poster/196798270/s718/avatar-the-last-airbender.%7Bformat%7D"
    },
    {
        "title": "Rick and Morty",
        "creator": "Dan Harmon",
        "imdb": 9.2,
        "year": 2013,
        "stars": ["Justin Roiland", "Chris Parnell", "Spencer Grammer"],
        "img": "https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_.jpg"
    },
    {
        "title": "Sherlock",
        "year": 2010,
        "creator": "Mark Gatiss",
        "imdb": 9.1,
        "year": 2010,
        "stars": ["Benedict Cumberbatch", "Martin Freeman", "Una Stubbs"],
        "img": "https://m.media-amazon.com/images/M/MV5BMWY3NTljMjEtYzRiMi00NWM2LTkzNjItZTVmZjE0MTdjMjJhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTQ4NTc5OTU@._V1_FMjpg_UX1000_.jpg"
    },
    {
        "title": "Death Note",
        "year": 2009,
        "imdb": 9.0,
        "stars": ["Mamoru Miyano", "Brad Swalie", "Vincent Tong"],
        "img": "https://m.media-amazon.com/images/M/MV5BNjRiNmNjMmMtN2U2Yi00ODgxLTk3OTMtMmI1MTI1NjYyZTEzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg"
    }
]

app.use('/', express.static('public'));



app.get('/movies', (req, res) => {
    if (req.query.title) {
        filter = movies.filter(
            function (movie) {
                return movie.title.toLowerCase().includes(req.query.title.toLowerCase());
            }
        )
        res.send(filter);
    } else if (req.query.creator) {
        filter = movies.filter(
            function (movie) {
                if (movie.creator)
                    return movie.creator.toLowerCase().includes(req.query.creator.toLowerCase());
            }
        )
        res.send(filter);
    }
    else if (req.query.stars) {
        filter = movies.filter(
            function (movie) {
                if (movie.stars)
                    return movie.stars.join(' ').toLowerCase().includes(req.query.stars.toLowerCase());
            }
        )
        res.send(filter);
    }
    else if (req.query.year) {
        filter = movies.filter(
            function (movie) {
                if (movie.year)
                    return movie.year.toString().includes(req.query.year.toString());
            }
        )
        res.send(filter);
    }
    else
        res.send(movies);
})

app.listen(3000, () => {
    console.log("listening on port 3000....")
})