"use strict";

function learnJS(text,callback) {
    console.log(`Я изучаю: ${text}`);
    callback();
}

function showMsg() {
    console.log('hello');    
}

learnJS('js',showMsg);