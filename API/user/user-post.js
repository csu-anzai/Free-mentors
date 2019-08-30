//import joi module for input validation
const Joi = require('joi');

//import express library and calling it
const express = require('express');
const app = express();

//array containing users information
const users = [];

app.use(express.json());
const userPostRouter = express.Router();

userPostRouter.post('/auth/signup/', (req, res) => {
    const schema = {
        "firstName": Joi.string().min(3).required(),
        "email": Joi.string().email().lowercase().required(),
        "password": Joi.string().min(5).alphanum().required(),
        "address": Joi.string(),
        "bio": Joi.string().min(50),
        "occupation": Joi.string().min(5),
        "expertise": Joi.string().min(5)
    }

    const result = Joi.validate(req.body, schema);
    if(result.error){
        res.status(400).send(result.error.details[0].message);
    } else {
        users.push(req.body);
        res.status(201).send(req.body);
    }
});

module.exports = userPostRouter;