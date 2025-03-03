const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

const API_KEY = "2d1dd424c3a5469b942faa5256113037"; // Your NewsAPI key
const NEWS_API_URL = `https://newsapi.org/v2/everything?q=finance OR money OR earnings OR sales OR business&language=en&sortBy=publishedAt&apiKey=${API_KEY}`;

// Enable CORS
app.use(cors());

// Proxy route to fetch news
app.get("/news", async (req, res) => {
    try {
        const response = await axios.get(NEWS_API_URL);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Error fetching news" });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
