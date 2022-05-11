const router = require('express').Router();

const userRt = require('./user-rt.js');
const postRt = require('./post-rt.js');
const commRt = require('./comm-rt.js');

router.use('/users', userRt);
router.use('/posts', postRt);
router.use('/comments', commRt);

module.exports = router;