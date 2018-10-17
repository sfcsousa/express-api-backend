'use strict';
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let helmetConfig = require('./configs/helmet');
let viewConfig = require('./configs/viewsConfigs');

let RoutesIndex = require('./routes/RoutesIndex');

let app = express();

helmetConfig(app);
viewConfig(app);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(RoutesIndex);

module.exports = app;
