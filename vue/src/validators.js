function password(value) {
    if (!value) {
        return "the  password field is required";
    }
    if (value.length <= 8) {
        return "The password must be at least 8 characters.";
    }

    return true;
}

function name(value) {
    if (!value) {
        return "the name field is required";
    }
    if (value.length <= 255) {
        return "The name must be at most 255  characters.";
    }

    return true;
}
export default { password, name };
