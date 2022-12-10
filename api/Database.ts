import mongoose, { connect, Schema, model } from 'mongoose';
import { URLSchema, URLType } from './Schema';

const URLs = mongoose.model<URLType>('urls', new Schema(URLSchema));

(async () => {
    try {
        console.log("Tentando entrar no banco de dados...")
        mongoose.set('strictQuery', true)
        await connect(`mongodb+srv://system:DbaF1zai1aH8mPJw@katty.8wlrr.mongodb.net/`)
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