const express = require('express')
const app = express()
const port = 5000
//middleware
const authMiddleware = (req,res,next)=>{
    const hours=new Date().getHours()
    const dates=new Date().toString()

    if ((hours<9 || hours>17) && (dates <'Monday' || dates >'Friday' )) {
        return res.sendFile(__dirname+'/public/close.html')
        
    }
    else{
        next()
    }
}
app.use( express.static(__dirname+'/public'))

 app.get('/',authMiddleware,(req,res)=>{
    res.sendFile(__dirname+'/public/home.html')
})

app.get('/contact', (req,res)=>{
    res.sendFile(__dirname+'/public/contact.html')
})
app.get('/services', (req,res)=>{
    res.sendFile(__dirname+'/public/services.html')
})

app.listen(port,(err)=>{
    if(err) throw err
    else console.log('server is run on 5000')
})

