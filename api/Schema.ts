const URLSchema = {
    _id: String,
    to: String,
    in: Number
}

interface URLType {
    _id: string // customurl
    to: string  // link to redirect
    in: number  // timestamp
}

export {
    URLSchema,
    URLType
}