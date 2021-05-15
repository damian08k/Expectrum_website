const burgerButton = document.querySelector("[data-burger]");
const menuNavElement = document.querySelector("[data-menu]");
const menuElements = document.querySelectorAll("a[href^='#'][data-menuLink]");
const siteLogo = document.querySelector("[data-logo]");

const changeMenuVisibilityOptionsAfterClick = () => {
    toggleBurgerOpenClass();
    showHideMenu();
    changeAriaExpandedAttr();
    addTransitionClassToMenu();
    addTransitionendEventToMenu();
};

const toggleBurgerOpenClass = () => {
    burgerButton.classList.toggle("hamburger--open-burger");
};

const showHideMenu = () => {
    menuNavElement.classList.toggle("menu--show-menu");
};

const changeAriaExpandedAttr = () => {
    const ariaExpanded = "aria-expanded";
    const ariaExpandedBtnAttr = checkAriaExpandedAttr(ariaExpanded);

    if (ariaExpandedBtnAttr === "false") {
        burgerButton.setAttribute(ariaExpanded, "true");
    } else if (ariaExpandedBtnAttr === "true") {
        burgerButton.setAttribute(ariaExpanded, "false");
    }
};

const addTransitionClassToMenu = () => {
    menuNavElement.classList.add("menu--transition");
};

const handleTransitionend = () => {
    removeTransitionClassFromMenu();
};

const removeTransitionClassFromMenu = () => {
    menuNavElement.classList.remove("menu--transition");
};

const addTransitionendEventToMenu = () => {
    menuNavElement.addEventListener("transitionend", handleTransitionend);
};

const checkAriaExpandedAttr = ariaExpanded => {
    const ariaExpandedBtnAttr = burgerButton.getAttribute(ariaExpanded);

    return ariaExpandedBtnAttr;
};

const toggleMenuVisibility = () => {
    const ariaExpandedBtnAttr = checkAriaExpandedAttr("aria-expanded");
    if (ariaExpandedBtnAttr === "true") {
        changeMenuVisibilityOptionsAfterClick();
    }
};

burgerButton.addEventListener("click", changeMenuVisibilityOptionsAfterClick);

const scrollAndMenuBehaviourAfterMenuElementClick = evt => {
    evt.preventDefault();

    toggleMenuVisibility();

    const clickedMenuElement = document.querySelector(evt.target.getAttribute("href"));
    const sectionMarginTopAndBottom = -100;
    const scrollTopValue =
        clickedMenuElement.getBoundingClientRect().top + window.pageYOffset + sectionMarginTopAndBottom;

    window.scrollTo({
        top: scrollTopValue,
        behavior: "smooth",
    });
};

menuElements.forEach(menuElement => {
    menuElement.addEventListener("click", scrollAndMenuBehaviourAfterMenuElementClick);
});

const scrollToTopAfterLogoClick = () => scrollTo(0, 0);

siteLogo.addEventListener("click", scrollToTopAfterLogoClick);

const closeMenuIfUserClickedOutsideMenu = evt => {
    const handleBurger = evt.target.dataset.burger;
    const handleMenu = evt.target.dataset.menu;

    if (!(handleBurger || handleMenu)) {
        toggleMenuVisibility();
    }
};

window.addEventListener("click", closeMenuIfUserClickedOutsideMenu);
