const burgerButton = document.querySelector("[data-burger]");
const menuNavElement = document.querySelector("[data-menu]");

const handleBurgerClick = () => {
    changeOpenCloseBurger();
    changeAriaExpandedAttr();
    showHideMenu();
};

const changeOpenCloseBurger = () => {
    burgerButton.classList.toggle("hamburger--open-burger");
};

const showHideMenu = () => {
    menuNavElement.classList.toggle("menu--show-menu");
};

const changeAriaExpandedAttr = () => {
    const ariaExpanded = "aria-expanded";

    const ariaExpandedBtnAttr = burgerButton.getAttribute(ariaExpanded);

    if (ariaExpandedBtnAttr === "false") {
        burgerButton.setAttribute(ariaExpanded, "true");
    } else if (ariaExpandedBtnAttr === "true") {
        burgerButton.setAttribute(ariaExpanded, "false");
    }
};

burgerButton.addEventListener("click", handleBurgerClick);
