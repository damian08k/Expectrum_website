const callbackRequestForm = () => {
    const requestForm = document.querySelector("[data-form='callback-request']");
    const requestInputs = [...document.querySelectorAll("[data-input='form-callback-request']")];

    requestForm.addEventListener("submit", evt => {
        evt.preventDefault();
        clearFormAfterSubmit(requestInputs);
    });
};

const clearFormAfterSubmit = inputs => {
    inputs.forEach(input => (input.value = ""));
};

const forms = () => {
    callbackRequestForm();
};

forms();
