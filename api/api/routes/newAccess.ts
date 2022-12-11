import { Request, Response, NextFunction } from 'express'
import { URLs } from '../../Database';

/**
 * Rota na qual as informações do usuário que acessou o link é setado no banco de dados
 */

async function post(req: Request, res: Response, next: NextFunction) {

    try {

        const { location, ip, customURL } = req.body    // Get all parameters who we use from body

        if (!location || !ip || !customURL) return;     // If some parameter doesn't exists, return

        await URLs.findOneAndUpdate({ "urls.custom": customURL.replace(/[^\w]+/g, '') }, { $push: { // Updating the inputs (push to add) 
            inputs: {
                in: new Date().getTime(),
                ip,
                userAgent: req['headers']['user-agent'],
                location: JSON.parse(location)
            }
        }}).exec()

    } catch (e) {
        res.status(500).send({ result: JSON.stringify(e.message) }) // Resposta em caso de erro
    }

}

export { post }