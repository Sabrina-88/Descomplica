import {express } from 'express';


let router = express.Router();
 
import EvaluateService from "../services/EvaluateService"

router.post('/addevaluate', async function (req, res)  {
 const evaluateModel = {
    concept:  req.body.concept,
       
 }

 const evaluate = await EvaluateService.saveEvaluate(evaluateModel);
 return res.status(200).json(evaluate);
});


 router.get('/getAllEvaluates', async function (req, res)  {
    const allEvaluates =  await EvaluateService.getAllEvaluates();
    return res.status(200).json(allEvaluates);
 })

 router.get('/evaluate/:id', async function (req, res)  {
    const allEvaluates =  await EvaluateService.getEvaluateById(req.params.id);
    return res.status(200).json(allEvaluates);
 })


    router.delete('/deleteEvaluate/:id', async function (req, res)  {
    const evaluate =  await EvaluateService.deletetEvaluateById(req.params.id);
    return res.status(200).json(evaluate);
 });

router.put('/updateEvaluate/:id', async function (req, res)  {
 const evaluateModel = {
     first_name:  req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        gener: req.body.gener
 }

 const evaluate = await EvaluateService.updatetEvaluateById(req.params.id, evaluateModel);
 return res.status(200).json(evaluate);
});
    
export default router;