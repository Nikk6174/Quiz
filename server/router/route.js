import { Router } from "express";
const router = Router();
import * as controller from '../controllers/controller.js';

// question routes
// router.get('/questions', controller.getQuestions);
// router.post('/questions', controller.insertQuestion);

router.route('/questions')
    .get(controller.getQuestions)
    .post(controller.insertQuestion)
    .delete(controller.dropQuestion);

router.route('/results')
    .get(controller.getResults)
    .post(controller.storeResult)
    .delete(controller.dropResult);

export default router;