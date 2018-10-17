'use strict';
module.exports = function (app) {

    let helmet = require('helmet');

    app.use(helmet());
    app.disable('x-powered-by');

};