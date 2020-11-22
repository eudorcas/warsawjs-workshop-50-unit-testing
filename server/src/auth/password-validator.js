const passwordValidator = (password) => {
    return password.length > 5 && /\W/i.test(password) && /\d/i.test(password) && /[A-Z]/.test(password); 
}

module.exports = { passwordValidator };