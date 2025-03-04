function autoClickAds() {
    const interval = (Math.random() * (30 - 25) + 25) * 60 * 1000; // Random interval between 25-30 mins

    const countryMapping = { 1: "USA", 2: "UK" };
    const deviceMapping = { 1: "Max", 2: "iOS" };
    const browserMapping = { 1: "Chrome", 2: "Firefox" };

    const selectedCountry = countryMapping[Math.floor(Math.random() * 2) + 1];
    const selectedDevice = deviceMapping[Math.floor(Math.random() * 2) + 1];
    const selectedBrowser = browserMapping[Math.floor(Math.random() * 2) + 1];

    function getAds() {
        return document.querySelectorAll(".banner-ad iframe"); // Selects all ads in iframe elements
    }

    function clickAd() {
        const ads = getAds();
        if (ads.length === 0) {
            console.log("No ads found.");
            return;
        }

        const ad = ads[Math.floor(Math.random() * ads.length)]; // Select a random ad
        try {
            ad.contentWindow.document.querySelector("a")?.click(); // Clicks ad inside iframe
            console.log(`Clicked ad from ${selectedCountry} on ${selectedDevice} using ${selectedBrowser}`);
        } catch (error) {
            console.warn("Ad click failed:", error);
        }
    }

    setInterval(clickAd, interval); // Clicks ads at random intervals
}

autoClickAds();
              
