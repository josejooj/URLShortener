import { Request, Response, NextFunction } from 'express'
import { URLs } from '../Database';

async function get(req: Request, res: Response, next: NextFunction) {
    
    try {
        
        const URL = req.params.viewUrl                          // Get the URL
        const data = await URLs.findOne({ "urls.view": URL })   // Search for the URL

        if (data) return await res.sendFile("./public/view/index.html", { root: '.' }); // If the view url exists, Send the view data file
        else return await res.redirect('/')                                             // If doesn't exists, redirect to the homepage

    } catch (e) {
        res.status(500).send({ result: JSON.stringify(e.message) })                     // Resposta em caso de erro
    }

}

export { get }