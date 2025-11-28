import express from 'express';

let router = express.Router();


import userController from './UserController.js';
import courseController from './CourseController.js';
import teacherController from './TeacherController.js';
import evaluateController from './EvaluateController.js';


router.get('/', function (req,res){
    console.log('API is running');
    res.status(200).json({messagem: ' Sabrina API is running'});
});

router.use('/', userController);
router.use('/', courseController);
router.use('/', teacherController);
router.use('/', evaluateController);

export default router;