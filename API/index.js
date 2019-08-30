const express = require('express');
const app = express();
const userPostRouter = require('./user/user-post');

const router = express.Router();

router.post('/auth/signup/', userPostRouter);

module.exports = router;