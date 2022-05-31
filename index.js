const express = require('express')
const app = express()
const mongo = require('mongoose')
const Link = require('./models/linkSchema')

mongo.connect('mongodb+srv://Shreyas:Chatter%4025@cluster0.nke32.mongodb.net/?retryWrites=true&w=majority',{
useNewUrlParser : true,
useUnifiedTopology : true
})
.then(()=>{
    console.log('Connected to databese')
})
.catch(err=>{
    console.log(err)
})

    app.set('view engine','ejs')
    app.use(express.static('public'))
    app.use(express.json());
    app.use(express.urlencoded({extended:true}))

    app.get('/',(req,res)=>{
        res.render('index')
    })



app.post('/short', async(req,res)=>{
const formFullLink = req.body.full
const formShortLink = req.body.short
const newLink = new Link({
    short : formShortLink,
    full : formFullLink
})
const shortLink = await Link.findOne({
    short: formShortLink
})
if (shortLink){
    console.log(shortLink)
}
newLink.save()
.then(res.redirect(`localhost:3000/${formShortLink}`))
})

const port = 3000
app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})