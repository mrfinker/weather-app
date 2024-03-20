const container = document.querySelector(".container");
const search = document.querySelector(".search-box button");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");
const error404 = document.querySelector(".not-found");

search.addEventListener("click", () => {
  const apiKey = "2a69a01c3902cf1163c9597385f72284";
  const city = document.querySelector(".search-box input").value;
  if (city == "") return;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
  ).then((response) => response.json()).then((json) => {

    if (json.cod == "404") {
      container.style.height = "400px";
      weatherBox.style.display = "none";
      weatherDetails.style.display = "none";
      error404.style.display = "block";
      error404.classList.add("fadeIn");
      return;
    }
  });
});
