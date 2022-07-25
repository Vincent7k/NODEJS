//Colocar nome, idade e idade-resultado
import { Request,Response } from "express";
export const form =((req:Request,res:Response) =>{


let name:string  = req.query.name as string
    name
    let age:string  = req.query.age as string
    age
    let adress:string  = req.query.adress as string
    adress
    let phone:string  = req.query.phone as string
    res.render('pages/form')

})

export const name =((req:Request,res:Response) =>{
let name: string = req.query.name as string
res.render('pages/name')}