const express = require("express");
const app = express();
require("../connection/conn.js")
const user = require("../models/user.js")
const attendance = require("../models/attendance.js")

const path = require("path");
const hbs = require("hbs");


app.use(express.json());
app.use(express.urlencoded({extended: false}));

// for view engine 
const viewsPath = path.join(__dirname, '../source/views');
app.set('view engine', 'hbs');
app.set("views", viewsPath);

// for css
const cssPath = path.join(__dirname, "../public");
app.use(express.static(cssPath));

// for js
const jsPath = path.join(__dirname, "../js folder");
app.use(express.static(jsPath));

// routing
app.get("/", (req, res) => {
    res.render("index.hbs");
})

app.get("/combinels", (req, res) => {
    res.render("combinels.hbs");
})

app.post("/register", async(req, res) => {
    console.log("enter",req.body);
    try {
        const name = req.body.name;
        const email = req.body.email;
        const pass = req.body.pass;
        const cnf = req.body.cnf;
        if(pass!==cnf) {
            return res.send("Invalid Credentials");
        }
        const findUser = await user.find({email: email});
        console.log("findusr",findUser);
        if(findUser.length>0) {
            return res.send("User Already Exist!");
        }
        const newUser = new user({
            username: name,
            email: email,
            password: pass
        })
        await newUser.save();
        console.log(newUser)
        // return res.send("user registered successfully!")
        res.render("index.hbs");
    } catch (err) {
        return res.send(err);
    }
})

app.post("/login", async(req, res) => {
    try {
        console.log("hello", req.body);
        const email = req.body.email;
        const pass = req.body.pass;
        const findUser = await user.find({email: email});
        if(!findUser) {
            return res.send("Invalid Credentials!");
        }
        if(findUser[0].password!==pass) {
            return res.send("Invalid Credentials!");
        }
        res.render("index.hbs");

        // return res.send("Logged In Successfully!")
    } catch (err) {
        return res.send(err);
    }
})

app.post("/attendance", async(req, res) => {
    try {
        console.log("enter",req.body)
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
        // return res.send("Attendance Done!")
        res.render("index.hbs");

    } catch (err) {
        return res.send(err);
    }
})

app.listen(3000, () => {
    console.log("Listening on the port 3k");
})