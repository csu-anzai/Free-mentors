const express = require('express');
const app = express();

const userGetRouter = express.Router();

let mentors = [
    {"mentorId": 1,
    "firstName": 'string',
	"email": 'string@gmail.com',
	"password": "String70275043",
	"address": "Stringhlfa",
	"bio": "String hklahdfklj lkahsdfjk llhsdfjk al kljdh lal a a hdlfhau euyqoweuyr  dfhlahldhklj",
	"occupation": " lsdh sdh ldsjh akhd lksdh",
	"expertise": "ldksfh ajhd haldh hl"},

	{"mentorId": 2,
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

userGetRouter.get('/mentors/:mentorId', (req, res) => {
	const param = req.params.mentorId;
	const mentor = mentors.find(mentorObject => {
		if(mentorObject.mentorId == param){
			return mentorObject;
		}
	});

	res.status(200).send(mentor);
	
});

module.exports = userGetRouter;