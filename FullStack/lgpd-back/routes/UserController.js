import {express } from 'express';

let router = express.Router();
 
import UserService from "../services/UserService"

router.post('/adduser', async function (req, res)  {
 const userModel = {
     first_name:  req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        gener: req.body.gener
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
        gener: req.body.gener
 }

 const user = await UserService.updatetUserById(req.params.id, userModel);
 return res.status(200).json(user);
});
    
export default router;