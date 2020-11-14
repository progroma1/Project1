/* Sample of object and usage of prompt*/ 
const numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?', '');
console.log(numberOfFilms);
console.log(`Я посмотрел ${numberOfFilms} фильмов`);
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres:[],
    privat: false
};

if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    alert('Вы киноман');
} else {alert('Произошла ошибка');}


tryAgain:
for (let i = 0; i < 3; i++) {
        let propTemp = prompt ('Один из последних просмотренных фильмов?','');
        if (propTemp === '' || propTemp === null || propTemp.length > 50) {
            i = 0;
            alert('Введите значение менше 50 символов');
            continue tryAgain;
        }
        personalMovieDB.movies[propTemp] = prompt ('На сколько оцените его?','');
}

console.log(personalMovieDB);