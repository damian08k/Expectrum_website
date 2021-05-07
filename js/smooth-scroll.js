const menuElements = document.querySelectorAll("a[href^='#'][data-menuLink]");
const logo = document.querySelector("[data-logo]");

menuElements.forEach(menuElement => {
    menuElement.addEventListener("click", evt => {
        evt.preventDefault();

        document.querySelector(evt.target.getAttribute("href")).scrollIntoView({
            block: "center",
            behavior: "smooth",
        });
    });
});

logo.addEventListener("click", () => {
    scrollTo(0, 0);
});
