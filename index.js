const api = {
    endpoint: "https://api.openweathermap.org/data/2.5/",
    key: "a5e1dd9cedfea05038f9ff898fc11f9d"
}

const input = document.querySelector("#input");
input.addEventListener("keypress", enter);

function enter(e) {
    if(e.key === 'Enter') {
        getInfo(input.value);
    }
}

async function getInfo(data) {
    const res = await fetch(`${api.endpoint}weather?q=${data}&units=metric&appID=${api.key}`);
    const result = await res.json();

    showResult(result);
}

showDate();

function showResult(result) {
    let city = document.querySelector("#parWhere");
    city.textContent = `${result.name}, ${result.sys.country}`;

    let temperature = document.querySelector("#temperature");
    temperature.innerHTML = `${Math.round(result.main.temp)} <span>°</span>`;

    let feelsLike = document.querySelector("#feelsLike");
    feelsLike.innerHTML = `<span>Feels like: </span>${Math.round(result.main.feels_like)}<span>°</span>`;

    let sky = document.querySelector("#sky");
    sky.textContent = `${result.weather[0].main}`;

    let minMax = document.querySelector("#minMax");
    minMax.innerHTML = `<span>Min: </span>${Math.round(result.main.temp_min)}<span>°</span> <span>Max: </span> ${Math.round(result.main.temp_max)}<span>°</span>`
}

function showDate() {

    const currentDate = new Date();

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let day = days[currentDate.getDay()];

    let todayDate = currentDate.getDate();
    
    let month = months[currentDate.getMonth()];

    let year = currentDate.getFullYear();

    let myDate = document.querySelector("#parWhen");

    myDate.innerHTML = `${day}` + " " + `${todayDate}` + " " + `${month}` + " " + `${year}`;
}

gsap.from('#header', {x: 300, opacity: 0, duration: 2, ease: 'power2.Out'})
gsap.from('#whereWhen', {opacity: 0, delay: 1.2, duration: 2, stagger: .6, ease: 'power2.Out'})
gsap.from('#temperatureFeels', {opacity: 0, delay: 1.2, duration: 2, stagger: .6, ease: 'power2.Out'})
gsap.from('#temperatureContainer', {x: 300, opacity: 0, duration: 2, ease: 'power2.Out'})
gsap.from('#skyContainer', {x: 300, opacity: 0, duration: 2, ease: 'power2.Out'})