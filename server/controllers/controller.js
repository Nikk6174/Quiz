import Question from "../models/qnsSchema.js";
import Result from "../models/resultSchema.js";
import {questions, answers} from "../database/data.js";

// get qns
export async function getQuestions(req, res) {
    try {
        const q = await Question.find()
        res.json(q)
    } catch (error) {
        res.json(error)
    }
}

// add qns
export async function insertQuestion(req, res) {
    try {
        await Question.insertMany([{
            question: questions, 
            answers: answers
          }]);
        res.json({msg:"inserted succesffully"})
    } catch (error) {
        res.json(error)
    }
}

// delete qns
export async function dropQuestion(req, res) {
   try {
     await Question.deleteMany()
     res.json({msg:"deleted succesffully"})
   } catch (error) {
         res.json(error)
   }
}


// get results
export async function getResults(req, res) {
    try {
        const r = await Result.find()
        res.json(r)
    } catch (error) {
        res.json(error)
    }
}

// post all result
export async function storeResult(req, res) {
    try {
        const {username, result, attempts, points, archived} = req.body
        if(!username && !result) throw new Error("data not provided")

        Result.create({
            username, result, attempts, points, archived
        })
        res.json({ msg: "Result stored successfully" });
        
    } catch (error) {
        res.json(error)
    }
}

// delete all result
export async function dropResult(req, res) {
    try {
        await Result.deleteMany()
        res.json({msg:"deleted succesffully"})
    } catch (error) {
        res.json(error)
    }
}