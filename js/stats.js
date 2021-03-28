const handleStatisticCounter = () => {
    const statsContainer = document.querySelector("[data-stats]");

    if (window.innerHeight + window.scrollY > statsContainer.offsetTop + 100) {
        window.removeEventListener("scroll", handleStatisticCounter);

        startCounting();
    }
};

const startCounting = () => {
    const statsNumber = document.querySelectorAll("[data-statsNumber]");
    const maxNumberOfCounterElements = {
        pictures: 823,
        customers: 354,
        hearts: 637,
    };

    statsNumber.forEach(statsElement => {
        const dataStatsNumberName = statsElement.dataset.statsnumber;

        counter(maxNumberOfCounterElements[dataStatsNumberName], statsElement);
    });
};

const counter = (maxElementNumber, statsElement) => {
    let counterNumber = 0;

    const updateCounter = () => {
        counterNumber++;
        if (counterNumber <= maxElementNumber) {
            statsElement.textContent = counterNumber;
            setTimeout(updateCounter, 5);
        }
    };

    setTimeout(updateCounter, 5);
};

window.addEventListener("scroll", handleStatisticCounter);
