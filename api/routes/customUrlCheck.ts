import { Request, Response } from 'express'
import { URLs } from '../Database'

async function get(req: Request, res: Response) {
    try {

        const data = await URLs.findOne({ _id: req.query.url }).exec()

        if (!data) return res.status(200).send('Ok')
        else return res.status(201).send("No")

    } catch(e) {
        res.status(500)
        console.error(e)
    }
}


export { get }