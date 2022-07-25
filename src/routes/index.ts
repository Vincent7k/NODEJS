import { Router, Request, Response, response} from 'express'
import { request, Server } from 'http';
import * as homeController from '../controllers/homeController'
import * as infoController from '../controllers/infoController'
import * as userController from '../controllers/userController'

const router = Router()

//Route home
router.get('/',homeController.home)   
//Route contact
router.get('/contact',infoController.contact)
//Route
router.get('/about',infoController.about)
//criar uma rota chamada name
router.get('/name',(req:Request, res:Response) =>{

    let name: string = req.query.name as string
    res.render('pages/name',{
        name
    })

})

//Criando formulário
router.get('/form',userController.form)

export default router