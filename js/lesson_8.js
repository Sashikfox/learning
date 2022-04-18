const obj = {
    name:'Sasha',
    age:31,
    wife:'Anna',

    pets: {
        cat:'Danya',
        color:'grey',
        weight:'8kg'
    },

    getCode: function() {
        console.log(`
        name:'Sasha',
        age:31,
        wife:'Anna',
    
        pets: {
            cat:'Danya',
            color:'grey',
            weight:'8kg'
        }`);
    }
};

// console.log(obj);

// for (let key in obj) {
//     if (typeof(obj[key]) === 'object') {
//         for (let i in obj[key]) {
//             console.log(`свойство ${i} равно ${obj[key][i]}`);
//         }
//     } else {
//         console.log(`свойство ${key} равно ${obj[key]}`);
//     }
// }

// console.log(Object.keys(obj));

// obj.getCode();

const {cat,color} = obj.pets;
console.log(color);
