import { Request, Response, NextFunction } from 'express'
import { URLs } from '../Database'

async function get(req: Request, res: Response) {
    try {
        
        const URL = await URLs.findOne({ "urls.custom": req.originalUrl.slice(1) }).exec() // Search some entrie in database with this URL

        if (URL) return res.sendFile("./public/redirect/index.html", { root: '.' }) // If exists, redirect to URL
        else return res.redirect("https://www.google.com/404")                      // else, redirect to 404 google page

    } catch (e) {
        res.status(500).send({ result: JSON.stringify(e.message) }) // Resposta em caso de erro
    }
}


export { get }