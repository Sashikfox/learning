const btn = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

// btn.addEventListener("click",()=> {
//     alert('fuck it');
// });
// let i = 0;
const deleteEvent = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
    // i++;
    // if (i==3) {
    //     btn.removeEventListener("click",deleteEvent);
    // }
};

// btn.addEventListener("click",deleteEvent);
// overlay.addEventListener("click",deleteEvent);

btn.forEach(item => {
    item.addEventListener('click', deleteEvent, {once:true});
});

const link = document.querySelector('a');
link.addEventListener('click', function (event) {
    event.preventDefault();

    console.log(event.target);
});