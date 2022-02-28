/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания




let numberOfFilms;
function askCountFilm() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while(numberOfFilms == '' || numberOfFilms == null || numberOfFilms == false || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }

}

askCountFilm();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}; 

    
    
    function detectKinoLevel() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        }  else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        }   else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        }   else {
            console.log("Произошла ошибка");
        }
    }

    detectKinoLevel();


    

    function lastFilms() {
        for(let i =0; i < 2; i++) {
            console.log(`Cycle ${i}`);
            const a = prompt('Один из последних просмотренных фильмов?' ,'');
            const b = +prompt('На сколько оцените его?' ,'');
            if ( a == "" || b == ""  || a == false || b == false || a.length > 50 || a.length > 50){
                console.log('empty space or tried to cancel');
                --i;
                continue;
            }
            personalMovieDB.movies[a] = b;
        }
    }

    lastFilms();


function showMyDB() {
   if( personalMovieDB.privat == false ) {
       console.log(personalMovieDB);
   }
}



function writeYourGenres() {
    for(let i = 1; i <= 3; i++) {
        const x = prompt(`Ваш любимый жанр под номером ${i}`, '');
        personalMovieDB.genres.push(x);
    }
}
writeYourGenres();