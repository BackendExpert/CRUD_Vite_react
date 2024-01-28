import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    username: "root",
    password: "",
    database: "react_crud"
})

app.get('/', (req, res) => {
    const sql = "SELECT * FROM user_tbl";
    db.query(sql, (err, data) => {
        if(err){
            return res.json({Error: "ERROR"})
        }
        return res.json(data)
    })
})

app.post('/create', (req, res) => {
    const sql ="INSERT INTO user_tbl(fname,lname,mobile,nic,create_at) VALUES (?)";
    const values = [
        req.body.fname,
        req.body.lname,
        req.body.mobile,
        req.body.nic,
        req.body.create_at        
    ]
    db.query(sql,[values] , (err, data) => {
        if(err){
            return res.json({Error: "ERROR"});
        }
        return res.json(data)
    })
})

app.put('/update/:id', (req, res) =>{
    const sql = "update user_tbl set fname = ?, lname = ?, mobile = ?, nic = ? where id = ?";
    const values = [
        req.body.fname,
        req.body.lname,
        req.body.mobile,
        req.body.nic
    ]
    const id = req.params.id;
})

app.listen(3030, ()=> {
    console.log("Server is Running")
})
