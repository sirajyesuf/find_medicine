function password(value) {
    if (!value) {
        return "the  password field is required";
    }
    if (value.length <= 8) {
        return "The password must be at least 8 characters.";
    }

    return true;
}

function phonenumber(value) {
    if (!value) {
        return "the phonenumber field is required";
    }
    if (value.length < 10 || value.length > 10) {
        return "The phonenumber must be 10 digits.";
    }

    return true;
}
export default { password, phonenumber };
