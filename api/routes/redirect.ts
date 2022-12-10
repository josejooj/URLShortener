import { Request, Response, NextFunction } from 'express'
import { URLs } from '../Database'

async function get(req: Request, res: Response) {
    try {
        
        const url = await URLs.findOne({ _id: req.originalUrl.slice(1) }).exec()
        
        console.log(req.originalUrl.slice(1))
        
        // @ts-ignore
        res.redirect(url.to)
        
    } catch (e) {
        res.status(500).send({ result: e.message })
    }
}


export { get }