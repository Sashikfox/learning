'use strict';

let numberOfFilms;

const personalMovieDB = {
    count: 0,    //- сюда передается ответ на первый вопрос
    movies: {},              //- в это свойство поместить пустой объект
    actors: {},              //- тоже поместить пустой объект
    genres: [],              //- сюда поместить пустой массив
    privat: false,             //- в это свойство поместить boolean(логическое) значение false
    start: () => {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
             personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberFilmsToDB: () => {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Один из последних просмотренных фильмов?', ''),
                b = +prompt('На сколько оцените его?', '');
    
            if (a.length < 50 && a != null && a != '' && !isNaN(b)) {
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
        }
    },
    detectLevelKinomania: () => {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: () => {
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB);
        } else {
            console.log('privat data');
        }
    },
    toggleVisibleMyDB: () => {
        // if(personalMovieDB.privat) {
        //     personalMovieDB.privat = false;
        // } else {
        //     personalMovieDB.privat = true;
        // }
        personalMovieDB.privat = !personalMovieDB.privat;

    },
    writeYourGenres: () => {
        // for (let i = 0; i < 3; i++) {
            // let genre = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');

            // if (genre === '' || genre == null) {
            //     console.log('некорректный ввод');
            //     i--;
            // } else {
            //     personalMovieDB.genres[i] = genre;
            // }

            let genres = prompt(`Введите ваши жанры через запятую`, '').toLocaleLowerCase();

            if (genres === '' || genres == null) {
                    console.log('некорректный ввод');
                    i--;
                } else {
                    personalMovieDB.genres = genres.split(', ');
                    personalMovieDB.genres.sort();
                }
        // }

        personalMovieDB.genres.forEach((item,i) => {
            console.log(`любимый жанр ${i+1} - это ${item}`);
        });
    }
};

