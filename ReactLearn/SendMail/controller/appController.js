const { error } = require('console');
const nodemailer = require('nodemailer');
const {EMAIL,PASSWORD}=require('../routers/env.js');
const Mailgen=require('mailgen');
const { link } = require('fs');

const signup= async (req,res)=>{
    let testAccount=await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
          // TODO: replace `user` and `pass` values from <https://forwardemail.net>
          user: testAccount.user,
          pass: testAccount.pass
        }
      });
      // async..await is not allowed in global scope, must use a wrapper

    // send mail with defined transport object
    const mail = {
      from: '"Fred Foo 👻" <foo@example.com>', // sender address
      to: "bar@example.com, baz@example.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    };
  
    
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    //
    // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
    //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
    //       <https://github.com/forwardemail/preview-email>
    //
  
  transporter.sendMail(mail).then((info)=>{
    return res.status(201)
    .json({msg:"you should receive mail",
            info:info.messageId,
            preview:nodemailer.getTestMessageUrl(info)
})
  }).catch(error=>{
    return res.status(500).json({error})
  })
  //main().catch(console.error);
   // res.status(201).json("Sign up success..");
}


//bill
const getBill=(req,res)=>{
  const{userEmail}=req.body;
    let config={
    service: 'gmail', // Replace with your SMTP service provider
        auth: {
          user: EMAIL, // Replace with your email
          pass: PASSWORD, // Replace with your password
        },
        
    }
    let transporter=nodemailer.createTransport(config);
    let mailGenerator=new Mailgen({
      theme:'default',
      product:{
        name:'Mailgen',
        link:'https://mailgen.js/'
      }

    })
    let response={
      body:{
        name:"my Books",
        intro:'your bill arrived',
        table:{
          data:[
            {item:"node mailer book",
            description:"An app",
            price:"100",
          }
          ]
        },
          outro:"looking forward to do more business"
      }
    }
    let mail=mailGenerator.generate(response);

    let message={
        from:EMAIL,
        to:userEmail,
        subject:"Place order",
        html:mail,
    }
    transporter.sendMail(message).then(()=>{
      return res.status(201).json({
        msg:"you should get email"
      }).catch(error=>{
        return res.status(500).json({error})
      })
    })
    res.status(201).json("getBill success..");
}
module.exports={
    signup,
    getBill
}