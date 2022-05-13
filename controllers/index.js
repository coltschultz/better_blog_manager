const router = require('express').Router();

const apiRt = require('./api/');
const homeRt = require('./home-rt.js');
const dashboardRt = require('./dash-rt.js');

router.use('/dashboard', dashboardRt);
router.use('/', homeRt);
router.use('/api', apiRt);

module.exports = router;