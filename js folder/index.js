const express = require("express");
const app = express();
require("./connection/conn.js")
const user = require("./models/user.js")
const attendance = require("./models/attendance.js")

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req,res)=>{
    res.send("hello")
})

app.post("/register", async(req, res) => {
    try {
        const name = req.body.name;
        const email = req.body.email;
        const pass = req.body.pass;
        const cnf = req.body.cnf;
        if(pass!==cnf) {
            return res.send("Invalid Credentials");
        }
        const findUser = await user.find({email: email});
        if(findUser) {
            return res.send("User Already Exist!");
        }
        const newUser = new user({
            username: name,
            email: email,
            password: pass
        })
        await newUser.save();
        console.log(newUser)
        return res.send("user registered successfully!")
    } catch (err) {
        return res.send(err);
    }
})

app.post("/login", async(req, res) => {
    try {
        const email = req.body.email;
        const pass = req.body.pass;
        const findUser = await user.find({email: email});
        if(!findUser) {
            return res.send("Invalid Credentials!");
        }
        if(findUser[0].password!==pass) {
            return res.send("Invalid Credentials!");
        }
        return res.send("Logged In Successfully!")
    } catch (err) {
        return res.send(err);
    }
})

app.post("/attendance", async(req, res) => {
    try {
        const name = req.body.name;
        const email = req.body.email;
        const sub = req.body.subject;
        
        const findUser = await user.find({email: email});
        if(!findUser) {
            return res.send("Student Not Exit!");
        }
        const newUser = new attendance({
            username: name,
            email: email,
            subject: sub
        })
        await newUser.save();
        console.log(newUser)
        return res.send("Attendance Done!")
    } catch (err) {
        return res.send(err);
    }
})

app.listen(3000, () => {
    console.log("Listening on the port 3k");
})