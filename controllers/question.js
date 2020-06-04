const express = require('express');
const verifyToken = require('../middlewares/verifyToken');
const Question = require('../models/questions');

const router = express.Router();

router.get('/', verifyToken, async(req, res, next) => {
    try {
        const questions = await Question.find();
        res.send(200).send(questions);
    } catch (error) {
        next(error);
    }
});

router.post('/', verifyToken, async(req, res, next) => {
    try {
        let question = new Question({
            author: req.userId,
            question: req.body.question
        });

        question = await question.save();
        res.status(200).send(question);
    } catch (error) {
        next(e);
    }
});