document.addEventListener("DOMContentLoaded", function () {
    function loadAdsterraAds() {
        const adContainer = document.querySelector(".right-ads");
        adContainer.innerHTML = "";

        for (let i = 0; i < 5; i++) {
            const adDiv = document.createElement("div");
            adDiv.classList.add("banner-ad");

            const adId = `ad-container-${i}`;
            adDiv.innerHTML = `
                <script async="async" data-cfasync="false" src="//pl25997823.effectiveratecpm.com/d24ce304d547da29307dcdbec70a4c45/invoke.js"></script>
                <div id="container-d24ce304d547da29307dcdbec70a4c45"></div>
            `;

            adContainer.appendChild(adDiv);
        }
    }

    loadAdsterraAds();
    setInterval(loadAdsterraAds, 60000);
});






// document.addEventListener("DOMContentLoaded", function () {
//     function loadAdsterraAds() {
//         const adContainer = document.querySelector(".right-ads");
//         adContainer.innerHTML = ""; // Clear existing ads before adding new ones

//         for (let i = 0; i < 5; i++) { // Load 5 Adsterra ads at a time
//             const adDiv = document.createElement("div");
//             adDiv.classList.add("banner-ad");

//             // Insert Adsterra script inside each ad div
//             adDiv.innerHTML = `
//             <script async="async" data-cfasync="false" src="//pl25997823.effectiveratecpm.com/d24ce304d547da29307dcdbec70a4c45/invoke.js"></script>
//             <div id="container-d24ce304d547da29307dcdbec70a4c45"></div>
//             `;

//             adContainer.appendChild(adDiv);
//         }
//     }

//     loadAdsterraAds(); // Initial load
//     setInterval(loadAdsterraAds, 60000); // Refresh ads every 1 minute
// });




