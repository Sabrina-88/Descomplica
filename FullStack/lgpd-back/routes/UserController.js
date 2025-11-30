import {express } from 'express';
import UserService from "../services/UserService"
import multer from 'multer';
import process from 'process';
import { profile } from 'console';


let router = express.Router();
 

const storage = multer.diskStorage({
      destination: function (req, file, callback) {   
         callback(null, './images');   
},
filename:function (req, file, callback) {   
   callback(null, req.body.first_name + "_" + req.body.last_name + "_" + Date.now() + file.originalname);
}
});

const upload = multer({ storage: storage }).single('file')


router.post('/adduser', async function (req, res)  {
 const userModel = {
     first_name:  req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        gener: req.body.gener,
        profile_picture:  req.file.path 
 }

 const user = await UserService.saveUser(userModel);
 return res.status(200).json(user);
});


 router.get('/getAllUsers', async function (req, res)  {
    const allUsers =  await UserService.getAllUsers();
    return res.status(200).json(allUsers);
 })

 router.get('/user/:id', async function (req, res)  {
    const allUsers =  await UserService.getUserById(req.params.id);
    return res.status(200).json(allUsers);
 })


    router.delete('/deleteUser/:id', async function (req, res)  {
    const user =  await UserService.deletetUserById(req.params.id);
    return res.status(200).json(user);
 });

router.put('/updateUser/:id', async function (req, res)  {
 const userModel = {
     first_name:  req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        gener: req.body.gener,
        profile_picture:  req.file.path
 }

 const user = await UserService.updatetUserById(req.params.id, userModel);
 return res.status(200).json(user);
});
    
export default router;