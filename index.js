const form = document.getElementById("form");
const content = document.getElementById("content");
const btn = document.querySelector('button');
const select = document.querySelector("select");
btn.addEventListener('click',()=>{
    
    getWeather(select.value)})

async function getWeather(city) {
    const path = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=GJTW4M3N5C9GEGBHGBGFAUV7K`;
  const response = await fetch(
    path,
    { mode: "cors" }
  );
  const weather = await response.json();
  console.log(weather);
  content.innerHTML = `<h1>${weather.days[0].temp} </h1>`;
}
