const express = require('express');
const app = express();


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
    res.render('speakers')
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


app.listen(5001, () =>{ console.log("Server started")});