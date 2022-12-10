import util from 'util'
import express from "express";
import routes from './routes/main'
import bodyParser from "body-parser";
import './Prototypes'
import './Database'

const app = express()

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

routes.map(x => {
    app[x.method](x.route, (req, res, next) => { console.log("A rota " + x.route + " foi solicitada"); next() })
    app[x.method](x.route, x.function)
    console.log(`Rota \"${x.route}\" carregada`)
})

app.listen(80, () => {
    console.log("API Inicializada")
})