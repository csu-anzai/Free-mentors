const express = require('express');
const app = express();

const userGetRouter = express.Router();

let mentors = [
    {"mentorId": 'integer',
    "firstName": 'string',
	"email": 'string@gmail.com',
	"password": "String70275043",
	"address": "Stringhlfa",
	"bio": "String hklahdfklj lkahsdfjk llhsdfjk al kljdh lal a a hdlfhau euyqoweuyr  dfhlahldhklj",
	"occupation": " lsdh sdh ldsjh akhd lksdh",
	"expertise": "ldksfh ajhd haldh hl"},

	{"mentorId": 'integer',
    "firstName": 'string',
	"email": 'string@gmail.com',
	"password": "String70275043",
	"address": "Stringhlfa",
	"bio": "String hklahdfklj lkahsdfjk llhsdfjk al kljdh lal a a hdlfhau euyqoweuyr  dfhlahldhklj",
	"occupation": " lsdh sdh ldsjh akhd lksdh",
	"expertise": "ldksfh ajhd haldh hl"},
]

userGetRouter.get('/mentors', (req, res) => {
	res.status(200).send(mentors);
});

module.exports = userGetRouter;