import { Request, Response, NextFunction } from 'express'
import { URLs } from '../../Database'
import { encode } from '../../Base64'

/**
 * Uma rota para gerar uma URL na API, geralmente
 * solicitada quando o botão "Gerar URL" do site 
 * principal é pressionado
 */

async function post(req: Request, res: Response) {
    try {

        const urls = {
            redirect: req.body.redirect,                    // URL to redirect
            custom: req.body.custom.replace(/[^\w]+/g, '')  // Custom URL (if exists)
        }

        if (await URLs.findOne({ "urls.custom": urls.custom })) return res.status(400).send({ result: "Please, change the custom URL" })
        // If the custom URL already exists, return

        let view_URL = ""                                                                     // pre-creating an url to get the view url

        do {                                                                                  // a loop to check some view url who doesn't exists

            const view_URL_temp = encode(`${Math.random() ** Math.random()}`)                 // Creating some random view url

            if (!await URLs.findOne({ "urls.view": view_URL_temp })) view_URL = view_URL_temp // If doesn't exists, we will set here

        } while (!view_URL)

        await new URLs({
            _id: new Date().getTime(),  // The date who the URL was created
            urls: {
                view: view_URL,         // The page to view the access
                custom: urls.custom,    // Custom URL
                redirect: urls.redirect // URL to redirect
            }
        }).save()

        await res.send({ result: req.get('origin') + '/view/' + view_URL }) // Redirect the user to the view page

    } catch (e) {
        res.status(500).send({ result: JSON.stringify(e.message) })    // Resposta em caso de erro
    }
}


export { post }