module.exports = (str) => {
    return str.split('').map(ch => String.fromCharCode(ch.charCodeAt(0) + 5))
    .join('');
}