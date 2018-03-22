const figlet = require('figlet');

const arg = process.argv[2];

figlet.text(arg || '!', (error, data) => console.log(error || data));