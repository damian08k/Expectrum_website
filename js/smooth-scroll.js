const menuElements = document.querySelectorAll("a[href^='#'][data-menuLink]");
const logo = document.querySelector("[data-logo]");

menuElements.forEach(menuElement => {
    menuElement.addEventListener("click", evt => {
        evt.preventDefault();

        const clickedMenuElement = document.querySelector(evt.target.getAttribute("href"));
        const sectionMarginTopAndBottom = -100;
        const scrollTopValue =
            clickedMenuElement.getBoundingClientRect().top + window.pageYOffset + sectionMarginTopAndBottom;

        window.scrollTo({
            top: scrollTopValue,
            behavior: "smooth",
        });
    });
});

logo.addEventListener("click", () => {
    scrollTo(0, 0);
});
