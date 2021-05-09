const serviceLeftColumn = document.querySelector("[data-serviceLeft]");
const serviceRightColumn = document.querySelector("[data-serviceRight]");

const addShowColumnClassForCreateAnimation = () => {
    if (window.innerHeight + window.scrollY > serviceLeftColumn.offsetTop + 50) {
        serviceLeftColumn.classList.add("services__left-column--show-column");
        serviceRightColumn.classList.add("services__right-column--show-column");

        window.removeEventListener("scroll", addShowColumnClassForCreateAnimation);
    }
};

window.addEventListener("scroll", addShowColumnClassForCreateAnimation);
