module.exports = function (app) {
    let path = require('path');

    app.set('views', path.join(__dirname, '../views'));
    app.set('view engine', 'ejs');
};