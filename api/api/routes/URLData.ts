import { Request, Response, NextFunction } from 'express'
import { URLs } from '../../Database'

/**
 * Rota para capturar todas as informações de uma URL
 */

async function get(req: Request, res: Response, next: NextFunction) {
    try {
        
        const urls = {
            "urls.custom": (req.query.custom as string)?.replace(/[^\w]+/g, ''), // Custom URL
            "urls.redirect": req.query.redirect,                                 // URL to redirect
            "urls.view": req.query.view                                          // URL to view 👀
        }

        for (const x in urls) if (!urls[x]) delete urls[x]      // Deleting all falsy properties

        const data = await URLs.findOne(urls).exec()            // Fetching the URL            

        return res.send(data || { result: "0 data found" })     // Send the data found

    } catch (e) {
        res.status(500).send({ result: JSON.stringify(e.message) }) // Resposta em caso de erro
    }
}


export { get }