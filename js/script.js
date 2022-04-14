const numberOfFilms = prompt('Сколько фильмов Вы уже посмотрели?','');

const personalMovieDB = {
    count:numberOfFilms,
    movies: {},
    actors:{},
    genres:[],
    privat:false
};

const   a = prompt('какой последний фильм вы смотрели?',''),
        b = prompt('оцените его',''),
        c = prompt('какой последний фильм вы смотрели?',''),
        d = prompt('оцените его','');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
