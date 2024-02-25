require('dotenv').config()
const express=require('express')
const sendMail=require('./controllers/mail')

const app=express()

app.get('/sendmail',sendMail,(req,res)=>
{
    return res.status(200).json(req.info)
})



const PORT=process.env.PORT || 1111
app.listen(PORT,()=>console.log(`server is running on ${PORT}`))