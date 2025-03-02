const API_KEY = "2d1dd424c3a5469b942faa5256113037";
const NEWS_API_URL = `https://newsapi.org/v2/everything?q=finance OR money OR earnings OR sales OR business&language=en&sortBy=publishedAt&apiKey=${API_KEY}`;

//function fetchNews() {
 //   fetch(NEWS_API_URL)
     //   .then(response => response.json())
     //   .then(data => {
        //    if (data.status === "ok") {
           //     displayNews(data.articles);
        //    } else {
             //   console.error("Failed to fetch news:", data);
       //     }
     //   })
    //    .catch(error => console.error("Error fetching news:", error));
//}


// Use a CORS Proxy (ONLY if needed)
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"; 

function fetchNews() {
    fetch(CORS_PROXY + NEWS_API_URL)  // Use proxy to avoid CORS issues
        .then(response => response.json())
        .then(data => {
            if (data.status === "ok") {
                displayNews(data.articles);
            } else {
                console.error("Failed to fetch news:", data);
            }
        })
        .catch(error => console.error("Error fetching news:", error));
}




function displayNews(articles) {
    const newsList = document.querySelector(".news-list");
    newsList.innerHTML = "";

    articles.forEach((article, index) => {
        if (!article.title || !article.description || !article.url) return;

        const newsItem = document.createElement("article");
        newsItem.classList.add("news-item");

        newsItem.innerHTML = `
            <img src="${article.urlToImage || 'news-image.jpg'}" alt="News Image">
            <div class="news-details">
                <h3>${article.title}</h3>
                <p>${article.description}</p>
                <span class="time">Posted ${timeAgo(article.publishedAt)}</span>
                <button class="read-button" onclick="redirectToDetail(${index})">Read All</button>
            </div>
        `;

        newsList.appendChild(newsItem);
    });

    // Store articles in localStorage for full-news.html
    localStorage.setItem("newsArticles", JSON.stringify(articles));
}

function redirectToDetail(index) {
    window.location.href = `full-news.html?article=${index}`;
}

function timeAgo(date) {
    const seconds = Math.floor((new Date() - new Date(date)) / 1000);
    const intervals = { year: 31536000, month: 2592000, day: 86400, hour: 3600, minute: 60 };

    for (let unit in intervals) {
        let count = Math.floor(seconds / intervals[unit]);
        if (count > 0) return `${count} ${unit}${count > 1 ? 's' : ''} ago`;
    }
    return "Just now";
}

fetchNews();
setInterval(fetchNews, 3600000);

































// const API_KEY = "2d1dd424c3a5469b942faa5256113037";
// const NEWS_API_URL = `https://newsapi.org/v2/everything?q=finance OR money OR earnings OR sales OR business&language=en&sortBy=publishedAt&apiKey=${API_KEY}`;

// function fetchNews() {
//     fetch(NEWS_API_URL)
//         .then(response => response.json())
//         .then(data => {
//             if (data.status === "ok") {
//                 displayNews(data.articles);
//             } else {
//                 console.error("Failed to fetch news:", data);
//             }
//         })
//         .catch(error => console.error("Error fetching news:", error));
// }

// function displayNews(articles) {
//     const newsList = document.querySelector(".news-list");
//     newsList.innerHTML = "";

//     articles.forEach(article => {
//         if (!article.title || !article.description || !article.url) return;

//         const newsItem = document.createElement("article");
//         newsItem.classList.add("news-item");

//         newsItem.innerHTML = `
//             <img src="${article.urlToImage || 'news-image.jpg'}" alt="News Image">
//             <div class="news-details">
//                 <h3>${article.title}</h3>
//                 <p>${article.description}</p>
//                 <span class="time">Posted ${timeAgo(article.publishedAt)}</span>
//                 <button class="read-button" onclick="redirectToDetail('${article.url}')">Read All</button>
//             </div>
//         `;

//         newsList.appendChild(newsItem);
//     });
// }

// function timeAgo(date) {
//     const seconds = Math.floor((new Date() - new Date(date)) / 1000);
//     const intervals = { year: 31536000, month: 2592000, day: 86400, hour: 3600, minute: 60 };

//     for (let unit in intervals) {
//         let count = Math.floor(seconds / intervals[unit]);
//         if (count > 0) return `${count} ${unit}${count > 1 ? 's' : ''} ago`;
//     }
//     return "Just now";
// }

// function redirectToDetail(newsUrl) {
//     window.open(newsUrl, "_blank");
// }

// fetchNews();
// setInterval(fetchNews, 3600000);












// const API_KEY = "2d1dd424c3a5469b942faa5256113037";
    // const NEWS_API_URL = `https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=${API_KEY}`;

    // function fetchNews() {
    //     fetch(NEWS_API_URL)
    //         .then(response => response.json())
    //         .then(data => {
    //             if (data.status === "ok") {
    //                 displayNews(data.articles);
    //             } else {
    //                 console.error("Failed to fetch news:", data);
    //             }
    //         })
    //         .catch(error => console.error("Error fetching news:", error));
    // }

    // function displayNews(articles) {
    //     const newsList = document.querySelector(".news-list");
    //     newsList.innerHTML = "";

    //     articles.slice(0, 4).forEach(article => {
    //         const newsItem = document.createElement("article");
    //         newsItem.classList.add("news-item");

    //         newsItem.innerHTML = `
    //             <img src="${article.urlToImage || 'news-image.jpg'}" alt="News Image">
    //             <div class="news-details">
    //                 <h3>${article.title}</h3>
    //                 <p>${article.description || 'No description available.'}</p>
    //                 <span class="time">Posted ${timeAgo(article.publishedAt)}</span>
    //                 <button class="read-button" onclick="redirectToDetail('${article.url}')">Read All</button>
    //             </div>
    //         `;

    //         newsList.appendChild(newsItem);
    //     });
    // }

    // function timeAgo(date) {
    //     const seconds = Math.floor((new Date() - new Date(date)) / 1000);
    //     const intervals = {
    //         year: 31536000, month: 2592000, day: 86400, hour: 3600, minute: 60
    //     };

    //     for (let unit in intervals) {
    //         let count = Math.floor(seconds / intervals[unit]);
    //         if (count > 0) return `${count} ${unit}${count > 1 ? 's' : ''} ago`;
    //     }
    //     return "Just now";
    // }

    // function redirectToDetail(newsUrl) {
    //     window.open(newsUrl, "_blank");
    // }

    // fetchNews();
    // setInterval(fetchNews, 3600000);
