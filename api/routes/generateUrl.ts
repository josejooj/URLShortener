import { Request, Response, NextFunction } from 'express'
import { URLs } from '../Database'

async function post(req: Request, res: Response) {
    try {
        
        if (await URLs.findById(req.body.customURL)) throw new Error("Please change the custom URL")

        await URLs.findOneAndUpdate({ _id: req.body.customURL }, {
            to: req.body.URL,
            in: Date.now()
        }, { upsert: true, new: true }).exec()
        
        await res.send({ result: req.get('origin') + '/' + req.body.customURL })

    } catch (e) {
        res.status(500).send({ result: JSON.stringify(e.message) })
    }
}


export { post }