const addAnimationToSingleService = () => {
    const serviceLeftColumn = document.querySelector("[data-serviceLeft]");
    const serviceRightColumn = document.querySelector("[data-serviceRight]");

    window.addEventListener("scroll", () =>
        addShowColumnClassForCreateAnimation(serviceLeftColumn, serviceRightColumn)
    );
};

const addShowColumnClassForCreateAnimation = (serviceLeftColumn, serviceRightColumn) => {
    if (window.innerHeight + window.scrollY > serviceLeftColumn.offsetTop + 50) {
        serviceLeftColumn.classList.add("services__left-column--show-column");
        serviceRightColumn.classList.add("services__right-column--show-column");
    }
};

addAnimationToSingleService();
