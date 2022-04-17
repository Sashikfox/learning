'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
    while (numberOfFilms.length > 50 || numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
    }
}

start();

const personalMovieDB = {
        count:numberOfFilms,    //- сюда передается ответ на первый вопрос
        movies: {},              //- в это свойство поместить пустой объект
        actors: {},              //- тоже поместить пустой объект
        genres: [],              //- сюда поместить пустой массив
        privat:false             //- в это свойство поместить boolean(логическое) значение false
};

function rememberFilmsToDB() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Один из последних просмотренных фильмов?',''),
            b = +prompt('На сколько оцените его?','');
    
        if (a.length < 50 && a != null && a != '' && !isNaN(b)) {
        personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}
rememberFilmsToDB();

function detectLevelKinomania() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}
detectLevelKinomania();

function showMyDB() {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);
    } else {
        console.log('privat data');
    }
}

function writeYourGenres() {
    for (let i = 0;i < 3;i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`,'');
    }
}

writeYourGenres();
showMyDB();