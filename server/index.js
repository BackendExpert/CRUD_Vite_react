import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

app.listen(3030, ()=> {
    console.log("Server is Running")
})
