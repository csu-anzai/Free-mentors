const express = require('express');
const app = express();
const userPostRouter = require('./user/user-post');

const router = express.Router();

router.post('/auth/signup/', userPostRouter);
router.post('/auth/signin/', userPostRouter);

module.exports = router;