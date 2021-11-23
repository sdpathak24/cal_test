const date = new Date();

const renderCalendar = () =>{
    date.setDate(1);

const monthDays = document.querySelector('.days');

const lastDay = new Date(date.getFullYear(),
date.getMonth() + 1,0).getDate();

const prevLastDay = new Date(date.getFullYear(),
date.getMonth(),0).getDate();

const firstDayIndex = date.getDay();

const lastDayIndex = new Date(date.getFullYear(),
date.getMonth() + 1,0).getDay();

const nextDays = 7 - lastDayIndex -1;

const months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

document.querySelector('.date h1').innerHTML
=months[date.getMonth()];

document.querySelector('.date p').innerHTML
=date.toDateString();

let days = "";

for (let x = firstDayIndex; x> 0; x--) {
    days += `<div class="prev-date">${prevLastDay -x +1}</div>`;
    
}

for (let i = 1;i<= lastDay; i++){
    if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
        days += `<div class="today">${i}</div>`;  
    }else{
    days += `<div>${i}</div>`;}
}

for(let j=1; j<= nextDays; j++){
    days += `<div class="next-date">${j}</div>`
    monthDays.innerHTML = days;
}
}



document.querySelector('.prev').addEventListener('click',() =>{
    date.setMonth(date.getMonth()-1);
    renderCalendar();
});

document.querySelector('.next').addEventListener('click',() =>{
    date.setMonth(date.getMonth()+1);
    renderCalendar();
});



renderCalendar();

document.querySelectorAll('.days div').forEach
(day => {
    day.addEventListener("click", event =>{
         event.currentTarget.style.background = 'red';
         localStorage.setItem(".days div",day.style.background="red");
    });
});

//let today = document.getElementsByClassName("today")[0]
//localStorage.setItem("today",today.style.background="red");

