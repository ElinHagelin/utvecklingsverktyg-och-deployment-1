import cors from 'cors'
import express from 'express'
import dotenv from 'dotenv'
import mammalRouter from "./mammals.js"


const app = express()
dotenv.config()
const port = process.env.PORT || 1337

app.use(cors())
app.use(express.json())
app.use((req, res, next) => {
	console.log(`${req.method} ${req.url}`, req.body);
	next()
})

app.use("/api/mammals", mammalRouter)

app.listen(port, () => {
	console.log(`Server is listening on port ${port}...`);
})