import { Request, Response, NextFunction } from 'express'

async function get(req: Request, res: Response, next: NextFunction) {

    try {

        return await res.sendFile('./public/home/index.html', { root: '.' }) // Envia a página principal

    } catch (e) {
        res.status(500).send({ result: JSON.stringify(e.message) })          // Resposta em caso de erro
    }
}

export { get }