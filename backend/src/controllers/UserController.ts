import {Request, Response} from 'express'
import EmailService from '../services/EmailService'

const users = [
    {name: 'Rillian Diello', email: 'rillian@email.com'}
]
export default {

   async index(req: Request, res: Response) {       
       return res.json(users)
   },

   async create(req: Request, res: Response) {     
       const emailService  = new EmailService();
       emailService.sendMail(
       { to: { name: 'Rillian Diello', email: 'rillian@email.com' }, message: { subject: 'Bem vindo', body: 'Seja bem vindo' } }       )

       return res.send();
   }
}