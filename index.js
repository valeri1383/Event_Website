const express = require('express');
const app = express();
const mysql = require("mysql");




app.use('/public', express.static('public'))
app.set('view engine','ejs')

app.get('/', (req,res) => {
    res.render('main')
})

app.get('/main', (req,res) => {
    res.render('main')
})

app.get('/about', (req,res) => {
    res.render('about')
})

app.get('/schedule', (req,res) => {
    res.render('schedule')
})

app.get('/speakers', (req,res) => {
    db.query('SELECT * FROM WEBSITE_DATABASE.Speakers;',(err, results)=>{
        if (err) throw err;
        res.render('speakers', {data: results})
        console.log(results)
    })
})

app.get('/venue', (req,res) => {
    res.render('venue')
})

app.get('/faq', (req,res) => {
    res.render('faq')
})

app.get('/contact', (req,res) => {
    res.render('contact')
})


const db = mysql.createConnection({
	host: "localhost",
	user: "user",
	password: "valeri1383",
	database: "WEBSITE_DATABASE"
}); 


db.connect((err)=> {
	if (err) throw err;
	console.log("MySQL is connected!");
  });


app.listen(5001, () =>{ console.log("Server started")});