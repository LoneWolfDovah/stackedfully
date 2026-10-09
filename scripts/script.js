
let currentPage = 1;

const apiKey = '7ee2a5337a4ebe6032cb4ed3e82e3c9b';
const apiLink = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&page=${currentPage}`;
const imgPath = 'https://image.tmdb.org/t/p/w1280';
const searchAPI = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`;

let currentURL = new URL(apiLink);

const filmSection = document.querySelector("#film-card-section");
const form = document.getElementById('search-bar');
const search = document.getElementById('search-query');
const searchValue = search.value;

const pagination = document.querySelector("#pagination");

const previousPage = document.createElement("button");
const nextPage = document.createElement("button");

previousPage.textContent = "Previous";
pagination.appendChild(previousPage);
nextPage.textContent = "Next";
pagination.appendChild(nextPage);


const allMovies = document.querySelector("#all-genres");
const HorroMovies = document.querySelector("#horror-listings");

// allMovies.addEventListener("click", function(){
//     console.log("All movies clicked");
//     const url = new URL(apiLink);
//     url.searchParams.delete("with_genres");
//     returnMovies(url);
// });

// HorroMovies.addEventListener("click", function(){
//     console.log("Horrors clicked");
//     const url = new URL(apiLink);
//     url.searchParams.set("with_genres", "27");

//     returnMovies(url);
// });


returnMovies(currentURL);

const genreListing = document.querySelector(".genre-listing");

genreListing.addEventListener("click", function(event) {
    const button = event.target.closest("button[data-genre]");

    if (!button) return;

    const genreId = button.dataset.genre;

    currentPage = 1;
    currentURL = new URL(apiLink);

    if (genreId !== "") {
        currentURL.searchParams.set("with_genres", genreId);
    } else {
        currentURL.searchParams.delete("with_genres");
    }

    currentURL.searchParams.set("page", currentPage);

    returnMovies(currentURL);
});



// returnMovies(apiLink);

async function returnMovies(url) {
    filmSection.innerHTML = "";
    const response = await fetch(url)
    const data = await response.json();
    
    // Movie card pravljenje za pocetnu
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

        const year = document.createElement("p");
        year.classList.add("release-year");
        year.textContent ="release year: " + movie.release_date.substring(0,4);

        card.appendChild(year);

        const rating = document.createElement("p");
        rating.classList.add("movie-rating");        

        rating.innerHTML = `
        <img src="/img/pics/rating.png" alt="">
        ${movie.vote_average.toFixed(1)}`;

        // rating.textContent = `Hearth ${movie.vote_average.toFixed(1)}`;

        card.appendChild(rating);

        filmSection.appendChild(card);
    });

    // Dugme za paginaciju, sakrivanje/ prikazivanje u zavisnosti od 
    // toga da li sam na page =1 ili na poslednjoj strani u api-u definisano kao totalpages

    switch(data.page){
        case 1:
            previousPage.style.display = "none";
            nextPage.style.display =
                data.total_pages ===1 ? "none" : "inline-block"
        break;
        case data.total_pages:
            previousPage.style.display = "inline-block";
            nextPage.style.display = "none";
        break;
        default:
        previousPage.style.display = "inline-block";
        nextPage.style.display = "inline-block";
    }


}

form.addEventListener("submit", function(event){
    event.preventDefault();
    const searchValue = search.value;

    if (searchValue.trim() === "") {
        return;
    }

    const searchURL = searchAPI + encodeURIComponent(searchValue);

    currentURL = new URL(searchURL);
    currentPage = 1;


    currentURL.searchParams.set("page", currentPage);

    returnMovies(currentURL);
});

// Pagination code, on click event listener treba da 
// postavi vrednost us currentPage na drugi broj.

previousPage.addEventListener("click", function(){
    if (currentPage >1){

        currentPage--;
        // const apiLink = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&page=${currentPage}`;
        currentURL.searchParams.set("page", currentPage)
    
        returnMovies(currentURL);
    }

});

nextPage.addEventListener("click", function(){

    currentPage++;

    currentURL.searchParams.set("page", currentPage)
    // const apiLink = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&page=${currentPage}`;

    returnMovies(currentURL);
});