document.addEventListener("DOMContentLoaded", function () {
    const adDivs = document.querySelectorAll(".banner-ad"); // Select all existing ad divs

    if (adDivs.length === 0) return; // Stop if there are no banner-ad divs

    adDivs.forEach(adDiv => {
        adDiv.innerHTML = ""; // Clear existing content

        // Create the script tag for Adsterra ad settings
        let script1 = document.createElement("script");
        script1.type = "text/javascript";
        script1.textContent = `
            atOptions = {
                'key' : 'acde138c7f1fb371922ded1b34a0b989',
                'format' : 'iframe',
                'height' : 60,
                'width' : 468,
                'params' : {}
            };
        `;

        // Create the second script tag that loads Adsterra's ad script
        let script2 = document.createElement("script");
        script2.type = "text/javascript";
        script2.src = "//www.highperformanceformat.com/acde138c7f1fb371922ded1b34a0b989/invoke.js";

        // Append the scripts to each ad div
        adDiv.appendChild(script1);
        adDiv.appendChild(script2);
    });
});
