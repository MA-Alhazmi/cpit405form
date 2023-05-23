function validateForm(event) {
    let userName = document.forms["myForm"]["name"].value;
    let email = document.forms["myForm"]["email"].value;
    let comment = document.forms["myForm"]["comment"].value;

    let errorMessageElem = document.getElementById("error-message");
    errorMessageElem.innerHTML = "";
    let isValid = true;

    // User name validation
    const userNameRegExp = /^([a-zA-Z0-9_- ]){8,32}$/;
    if (userName == "" || !userNameRegExp.test(userName)) {
        errorMessageElem.innerHTML += "<p>Invalid user name. User name must be between 8 and 32 characters and may contain a combination of letters and numbers</p>";
        isValid = false;
    }
    // Email regular expression pattern (RFC 5322 Official Standard)
    const regExpPattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    if (email == "" || !regExpPattern.test(email)) {
        errorMessageElem.innerHTML += "<p>Invalid email. A valid email address is required.</p>";
        isValid = false;
    }
    // Password validation
    const commentRegExp = "/^([a-zA-Z0-9_-]){8,150}$/";
    if (comment == "" || !commentRegExp.test(comment)) {
        errorMessageElem.innerHTML += "<p>comment must be between 8 and 150 characters.</p></p>";
        isValid = false;
    }

    // If validation has failed for any input field, do not submit the form
    if(!isValid) {
        event.preventDefault();
    };
}