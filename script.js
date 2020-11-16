/* Sample of object and usage of prompt*/ 


//console.log(numberOfFilms);
//console.log(`Я посмотрел ${numberOfFilms} фильмов`);
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres:[],
    privat: true, 
    start: function () {
        personalMovieDB.count = +prompt ('Сколько фильмов вы уже посмотрели?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count) ) {
            personalMovieDB.count = +prompt ('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = prompt('На сколько оцените его?', '');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            alert('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            alert('Вы киноман');
        } else {alert('Произошла ошибка');}
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {

        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i < 2; i++) {
           /* let genre = prompt (`Ваш любимий жанр под номером ${i}: `, '');
            if (genre === '' || genre == null) {
                console.log('Вы вавели некорректные данные или не ввели их');
                i--;
            } else {
            personalMovieDB.genres[i-1] =  genre;
            }  */
            let genres = prompt (`Введите ваши любимые жанры через запятую`, '');
            if (genres === '' || genres == null) {
                console.log('Вы вавели некорректные данные или не ввели их');
                i--;
            } else {
            personalMovieDB.genres =  genres.split(', ');
            personalMovieDB.genres.sort();
            }  
        }
        personalMovieDB.genres.forEach((item,i) => {
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        });
    }
};
