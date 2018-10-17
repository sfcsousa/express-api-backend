let express = require('express');
let router = express.Router();

let indexRouter = require('./index');
let usersRouter = require('./users');

router.use(indexRouter);
router.use(usersRouter);


RoutesIndex = router;
module.exports = RoutesIndex;