// 1. Data Array 
const mediaData = [
    { id: 1, title: "Inception", year: 2010, rating: 8.8, genre: "Sci-Fi", type: "movie", badge: "trending", image: "https://via.placeholder.com/300x450" },
    { id: 2, title: "Breaking Bad", year: 2008, rating: 9.5, genre: "Crime", type: "tv", badge: "top-rated", image: "https://via.placeholder.com/300x450" },
    { id: 3, title: "The Dark Knight", year: 2008, rating: 9.0, genre: "Action", type: "movie", badge: "trending", image: "https://via.placeholder.com/300x450" },
    { id: 4, title: "Stranger Things", year: 2016, rating: 8.7, genre: "Drama", type: "tv", badge: "new", image: "https://via.placeholder.com/300x450" },
    { id: 5, title: "Interstellar", year: 2014, rating: 8.6, genre: "Sci-Fi", type: "movie", badge: "", image: "https://via.placeholder.com/300x450" },
    { id: 6, title: "The Bear", year: 2022, rating: 8.5, genre: "Drama", type: "tv", badge: "trending", image: "https://via.placeholder.com/300x450" },
    { id: 7, title: "Avatar", year: 2009, rating: 7.9, genre: "Fantasy", type: "movie", badge: "", image: "https://via.placeholder.com/300x450" },
    { id: 8, title: "The Office", year: 2005, rating: 9.0, genre: "Comedy", type: "tv", badge: "top-rated", image: "https://via.placeholder.com/300x450" }
];

// 2. Helper Function: Rating  Color  (If/Else)
function getRatingClass(rating) {
    if (rating >= 8.5) {
        return "rating-high"; // 
    } else if (rating >= 7.0) {
        return "rating-mid"; //
    } else {
        return "rating-low"; // 
    }
}

// 3. Helper Function: Badge  (Switch Statement)
function getBadgeHTML(badge) {
    switch (badge) {
        case "trending":
            return `<span class="badge badge-trending">Trending Now</span>`;
        case "top-rated":
            return `<span class="badge badge-top">Top Rated</span>`;
        case "new":
            return `<span class="badge badge-new">New Release</span>`;
        default:
            return ""; // Badge 
    }
}

// 4. Card Builder: Card HTML(Template Literals)
function createCardHTML(item) {
    return `
        <div class="movie-card">
            <div class="card-thumb">
                <img src="${item.image}" alt="${item.title}">
                ${getBadgeHTML(item.badge)}
                <div class="card-overlay">
                    <button class="btn-play"><i class="fa-solid fa-play"></i></button>
                </div>
            </div>
            <div class="card-info">
                <h3>${item.title}</h3>
                <div class="card-meta">
                    <span class="year">${item.year}</span>
                    <span class="rating ${getRatingClass(item.rating)}">${item.rating}</span>
                </div>
                <p class="genre">${item.genre}</p>
            </div>
        </div>
    `;
}

// 5. Render Function: (For Loop)
function renderCards(containerId, filterType) {
    const container = document.getElementById(containerId);
    if (!container) return; // Grid 

    let htmlContent = "";

    for (let i = 0; i < mediaData.length; i++) {
        const item = mediaData[i];

        // Homepage Challenge: 
        if (containerId === "movies-grid-home") {
            if (item.rating > 8.0) {
                htmlContent += createCardHTML(item);
            }
        } 
        // (Movies/TV Shows filter)
        else if (item.type === filterType) {
            htmlContent += createCardHTML(item);
        }
    }

    container.innerHTML = htmlContent;
}

// 6. 
window.onload = function() {
    renderCards("movies-grid-home", "movie"); // Index.html
    renderCards("movies-grid", "movie");      // Movies.html 
    renderCards("tvshows-grid", "tv");        // TV-Shows.html 
};