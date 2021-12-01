import app from "./app"
import log from "./utils/log"

const port = +process.env.SERVER_PORT! as number || 8082
const host = process.env.SERVER_HOST as string || 'localhost'

app.listen(port, host, ()=>{
    log.info(`Serving on port : ${port}`)
})