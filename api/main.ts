import express from "express";
import routes from './routes/main'
import bodyParser from "body-parser";
import './Prototypes'
import './Database'

const app = express()

app.use('/public', express.static('public'))
app.use(express.static('public/assets'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

routes.map(x => {
    app[x.method](x.route, x.function)
    console.log(`Rota ${x.method.toUpperCase()} \"${x.route}\" carregada`)
})

app.listen(80, () => {
    console.log("API Inicializada")
})