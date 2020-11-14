

const numberOfFilms = prompt ('Сколько фильмов вы уже посмотрели?', '');
console.log(numberOfFilms);
console.log(`Я посмотрел ${numberOfFilms} фильмов`);


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres:[],
    privat: false
};
    for (let i = 0; i < 2; i++) {
        let propTemp = prompt ('Один из последних просмотренных фильмов?','');
        personalMovieDB.movies[propTemp] = prompt ('На сколько оцените его?','');

           
    }



console.log(personalMovieDB);