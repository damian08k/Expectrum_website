const burgerButton = document.querySelector("[data-burger]");
const menuNavElement = document.querySelector("[data-menu]");

const handleBurgerClick = () => {
    changeOpenCloseBurger();
    changeAriaExpandedAttr();
    showHideMenu();
    addTransitionClassToMenu();
    addTransitionendEventToMenu();
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

const addTransitionClassToMenu = () => {
    menuNavElement.classList.add("menu--transition");
};

const removeTransitionClassFromMenu = () => {
    menuNavElement.classList.remove("menu--transition");
};

const addTransitionendEventToMenu = () => {
    menuNavElement.addEventListener("transitionend", handleTransitionend);
};

const handleTransitionend = () => {
    removeTransitionClassFromMenu();
};

burgerButton.addEventListener("click", handleBurgerClick);
