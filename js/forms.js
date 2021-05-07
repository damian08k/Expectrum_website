const callbackRequestForm = () => {
    const requestForm = document.querySelector("[data-form='callback-request']");
    const requestInputs = [...document.querySelectorAll("[data-input='form-callback-request']")];

    submitForm(requestForm, requestInputs);
};

const clearFormAfterSubmit = (inputs, clearSigns) => {
    inputs.forEach(input => (input.value = ""));

    if (clearSigns !== 0 && typeof clearSigns === "function") {
        clearSigns();
    }
};

const submitForm = (form, inputs, clearSigns = 0) => {
    form.addEventListener("submit", evt => {
        evt.preventDefault();
        clearFormAfterSubmit(inputs, clearSigns);
    });
};

const contactFormMessageArea = document.querySelector("[data-message]");
const contactFormMessageMaxSignsValue = contactFormMessageArea.getAttribute("maxlength");
const contactFormMessageCurrentSigns = document.querySelector("[data-signs='current']");

const contactForm = () => {
    const htmlContactForm = document.querySelector("[data-contactForm]");
    const contactFormInputs = [...document.querySelectorAll("[data-contactInput]"), contactFormMessageArea];

    setMaxSigns(contactFormMessageMaxSignsValue);

    contactFormMessageArea.addEventListener("input", countCurrentSigns);

    const clearSigns = () => {
        contactFormMessageCurrentSigns.innerText = 0;
    };

    submitForm(htmlContactForm, contactFormInputs, clearSigns);
};

const setMaxSigns = maxSignsValue => {
    const maxSigns = document.querySelector("[data-signs='max']");

    maxSigns.innerText = maxSignsValue;
};

const countCurrentSigns = () => {
    const messageAreaValueLength = contactFormMessageArea.value.length;

    contactFormMessageCurrentSigns.innerText = messageAreaValueLength;
};

const forms = () => {
    callbackRequestForm();
    contactForm();
};

forms();
