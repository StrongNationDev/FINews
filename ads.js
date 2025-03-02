document.addEventListener("DOMContentLoaded", function () {
    const adContainers = document.querySelectorAll(".banner-ad");

    adContainers.forEach(adContainer => {
        adContainer.innerHTML = `
            <script type="text/javascript">
                atOptions = {
                    'key': 'acde138c7f1fb371922ded1b34a0b989',
                    'format': 'iframe',
                    'height': 60,
                    'width': 468,
                    'params': {}
                };
            </script>
            <script type="text/javascript" src="//www.highperformanceformat.com/acde138c7f1fb371922ded1b34a0b989/invoke.js"></script>
        `;
    });
});

