const apiKey = '7ee2a5337a4ebe6032cb4ed3e82e3c9b';
const apiLink = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&page=1`;
const imgPath = 'https://image.tmdb.org/t/p/w1280';
const searchAPI = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`;

const filmSection = document.querySelector("#film-card-section");
const form = document.getElementById('search-bar');
const search = document.getElementById('search-query');
const searchValue = search.value;

console.log(searchValue);




returnMovies(apiLink);

async function returnMovies(url) {
    filmSection.innerHTML = "";
    const response = await fetch(url)
    const data = await response.json();
    console.log(data);

    data.results.forEach(movie => {

        const card = document.createElement("div");

        card.classList.add("film-card");

        const poster = document.createElement("img");

        poster.classList.add("poster-img");

        poster.src = imgPath + movie.poster_path;

        card.appendChild(poster);

        const title = document.createElement("h3");
        title.classList.add("movie-title");
        title.textContent = movie.title;

        card.appendChild(title);

        filmSection.appendChild(card);
    });
}

form.addEventListener("submit", function(event){
    event.preventDefault();
    const searchValue = search.value;

    if (searchValue.trim() === "") {
        return;
    }
    const searchURL = searchAPI + encodeURIComponent(searchValue);

    returnMovies(searchURL);
});
