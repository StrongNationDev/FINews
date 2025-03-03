document.addEventListener("DOMContentLoaded", function () {
    const adContainers = document.querySelectorAll(".banner-ad");

    if (adContainers.length === 0) return;

    // Create a single script element to load the ad once
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.innerHTML = `
        atOptions = {
            'key': 'acde138c7f1fb371922ded1b34a0b989',
            'format': 'iframe',
            'height': 60,
            'width': 468,
            'params': {}
        };
    `;

    const invokeScript = document.createElement("script");
    invokeScript.type = "text/javascript";
    invokeScript.src = "//www.highperformanceformat.com/acde138c7f1fb371922ded1b34a0b989/invoke.js";

    // Append script to the first ad container and wait for it to load
    adContainers[0].innerHTML = "";
    adContainers[0].appendChild(script);
    adContainers[0].appendChild(invokeScript);

    invokeScript.onload = function () {
        // Once the ad loads, duplicate it into all other ad containers
        setTimeout(() => {
            const firstAd = adContainers[0].innerHTML; // Get the loaded ad content
            adContainers.forEach((adContainer, index) => {
                if (index !== 0) {
                    adContainer.innerHTML = firstAd; // Copy the first loaded ad
                }
            });
        }, 3000); // Delay to ensure the first ad loads
    };
});



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
