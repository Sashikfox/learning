"USE STRICT";

const num = 49;

if (num < 49) {
    console.log('less 49');
} else {
    if (num > 51) {
        console.log('error');
    } else {
        if (num == 50) {
            console.log('num = 50');
        }
    }
}

switch(num) {
    case 50: 
        console.log('num = 50');
        break;
    case 49:
        console.log('num = 49');
        break;
    case 51:
        console.log('num = 51');
    default:
        console.log('no found');


}


