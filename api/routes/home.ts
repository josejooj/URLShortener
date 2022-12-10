import { Request, Response, NextFunction } from 'express'

function get (req: Request, res: Response) {
    res.sendFile('./public/home/index.html', { root: '.' })
}

export {
    get
}