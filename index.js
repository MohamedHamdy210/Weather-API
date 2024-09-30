const form = document.getElementById("form");
const content = document.getElementById("content");
const btn = document.querySelector("button");
const select = document.querySelector("select");
const f = document.getElementById("f");
const c = document.getElementById("c");
let max, min, temp, desc;

async function getWeather(city) {
  const path = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=GJTW4M3N5C9GEGBHGBGFAUV7K`;
  const response = await fetch(path, { mode: "cors" });
  const weather = await response.json();
  max = weather.days[0].tempmax;
  min = weather.days[0].tempmin;
  temp = weather.days[0].temp;
  desc = weather.days[0].description;
  console.log(weather);
}
const celsuis = (d) => {
  return ((d - 32) / (9 / 5)).toFixed(1);
};
const update = () => {
  if (c.checked) {
    content.innerHTML = `
    <h1>Max Temp: ${celsuis(max)} </h1>
    <h1>Min Temp: ${celsuis(min)} </h1>
    <h1>Temp: ${celsuis(temp)} </h1>
    
  
    <h1>Description: ${desc} </h1>`;
  } else {
    content.innerHTML = `
    <h1>Max Temp: ${max} </h1>
    <h1>Min Temp: ${min} </h1>
    <h1>Temp: ${temp} </h1>
    
  
    <h1>Description: ${desc} </h1>`;
  }
};
btn.addEventListener("click", () => {
  getWeather(select.value).then(update);
});
f.addEventListener("change", update);
c.addEventListener("change", update);
