const nodemailer=require('nodemailer')

const transporter=nodemailer.createTransport({
    host:"smtp.gmail.com",
    post:587,
    secure:false,
    auth:{
        user:process.env.EMAIL,
        pass:process.env.PASSWORD
    }
})

function sendMail(req,res,next)
{
    const {email}=req.query

    if(email)
    {
        const mailOptions={
            from:process.env.EMAIL,
            to:email,
            subject:'message from nodemailer',
            html:`<h1>hello</h1>`
        }
        transporter.sendMail(mailOptions,(err,info)=>
        {
            if(err)
            {
                console.log(err)
                return res.status(400).json({error:'could not send the mail'})
            }
            req.info=info
            return next()
        })
    }
    else
    {
        return res.status(400).json({error:'email not found'})
    }
}


module.exports=sendMail