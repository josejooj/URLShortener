import { Request, Response, NextFunction } from 'express'

/**
 * Middleware para mostrar no console quando o site for acessado 
 */

export default async function (req: Request, res: Response, next: NextFunction) {
    try {
        
        console.log("A rota \"" + req.baseUrl + "\" foi solicitada");  // Show in console when some route was requested
        
        next()                                                         // continue

    } catch (e) {
        res.status(500).send({ result: e.message })
    }
}