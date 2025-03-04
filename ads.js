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

