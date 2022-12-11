import { connect, Schema, model, set } from 'mongoose';
import { URLSchema, URLType } from './Schema';
import { mongoURL } from '../config.json';

const URLs = model<URLType>('urls', new Schema(URLSchema));

console.log("Tentando entrar no banco de dados...");

(async () => {
    try {
        set('strictQuery', true)
        await connect(mongoURL)
        console.log("Conectado com sucesso ao banco de dados")
    } catch(e) {
        console.log("Failed to connect to database")
        console.error(e)
        process.exit()
    }
})()

export {
    URLs
}