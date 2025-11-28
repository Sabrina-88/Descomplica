import {express } from 'express';


let router = express.Router();
 
import CourseService from "../services/CourseService"
router.post('/addcourse', async function (req, res)  {
 const courseModel = {
    concept:  req.body.concept,
       
 }

 const course = await CourseService.saveCourse(courseModel);
 return res.status(200).json(course);
});


 router.get('/getAllCourses', async function (req, res)  {
    const allCourses =  await CourseService.getAllCourses();
    return res.status(200).json(allCourses);
 })

 router.get('/course/:id', async function (req, res)  {
    const allCourses =  await CourseService.getCourseById(req.params.id);
    return res.status(200).json(allCourses);
 })


    router.delete('/deleteCourse/:id', async function (req, res)  {
    const course =  await CourseService.deletetCourseById(req.params.id);
    return res.status(200).json(course);
 });

router.put('/updateCourse/:id', async function (req, res)  {
 const courseModel = {
     first_name:  req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        gener: req.body.gener
 }

 const course = await CourseService.updatetCourseById(req.params.id, courseModel);
 return res.status(200).json(course);
});
    

export default router;