const express = require('express');
const app = express();
const userPostRouter = require('./user/user-post');
const userGetRouter = require('./user/user-get');

const router = express.Router();

router.post('/auth/signup/', userPostRouter);
router.post('/auth/signin/', userPostRouter);
router.get('/mentors', userGetRouter);

module.exports = router;