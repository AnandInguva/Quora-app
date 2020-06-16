const express = require('express');
const verifyToken = require('../middlewares/verifyToken');
const Question = require('../models/questions');
const User = require('../models/users')
const router = express.Router();

router.get('/', verifyToken, async(req, res, next) => {
    try {
        const questions = await Question.find();
        res.status(200).send(questions);
    } catch (error) {
        next(error);
    }
}).get('/:id', verifyToken, async(req, res, next) => {
    try{
        console.log(req.params)
        const questions = await Question.find({"author" : req.params.id})
        res.status(200).send(questions);
    }
    catch(error){
        next(error)
    }
});

const pushQuestionToUser = async(req, res) => {
    

}


//get all the questions from the data
router.post('/', verifyToken, async(req, res, next) => {
    try {
        let question = new Question({
            author: req.userId,
            question: req.body.question
        });

        let user = await User.findById(req.userId);
        user.questions.push(req.body.question);
        user = await user.save();       

        question = await question.save();
        res.status(200).send(question);
    } catch (error) {
        next(error);
    }
});

module.exports = router;