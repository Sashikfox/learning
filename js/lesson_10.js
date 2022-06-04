const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();
newArray[1]='sssss';
console.log(newArray);
console.log(oldArray);

const video = ['youtube','vimeo','rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'] ;

console.log(internet);

function logerr(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];
logerr(...num);

const array = ['a', 'b'];
const newAarray = [...array];
const q = {
    one:1,
    two:2
};

const newObj = {...q};

console.log(newObj);