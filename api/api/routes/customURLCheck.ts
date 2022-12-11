import { Request, Response } from 'express'
import { URLs } from '../../Database'

/**
 * Rota para checar se a URL Custom existe
 * e é válida
 */

async function get(req: Request, res: Response) {

    try {

        const data = await URLs.findOne({ "urls.custom": (req.query.URL as string)?.replace(/[^\w]/g, '') }).exec() // Get the data of some object with the query url as id

        return res.send({ exists: !!data })                                                                         // If the data doesn't exists, return true, else, return false

    } catch(e) {
        res.status(500).send({ result: JSON.stringify(e.message) }) // Resposta em caso de erro
    }

}


export { get }