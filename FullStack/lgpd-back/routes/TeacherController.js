import {express } from 'express';


let router = express.Router();
 
import TeacherService from "../services/TeacherService"

router.post('/addteacher', async function (req, res)  {
 const teacherModel = {
    name:  req.body.name,
       
 }

 const teacher = await TeacherService.saveTeacher(teacherModel);
 return res.status(200).json(teacher);
});


 router.get('/getAllTeachers', async function (req, res)  {
    const allTeachers =  await TeacherService.getAllTeachers();
    return res.status(200).json(allTeachers);
 })

 router.get('/teacher/:id', async function (req, res)  {
    const allTeachers =  await TeacherService.getTeacherById(req.params.id);
    return res.status(200).json(allTeachers);
 })


    router.delete('/deleteTeacher/:id', async function (req, res)  {
    const teacher =  await TeacherService.deletetTeacherById(req.params.id);
    return res.status(200).json(teacher);
 });

router.put('/updateTeacher/:id', async function (req, res)  {
 const teacherModel = {
     first_name:  req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        gener: req.body.gener
 }

 const teacher = await TeacherService.updatetTeacherById(req.params.id, teacherModel);
 return res.status(200).json(teacher);
});
    
export default router;