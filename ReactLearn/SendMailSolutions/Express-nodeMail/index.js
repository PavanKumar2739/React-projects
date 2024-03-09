const express=require('express');
const route=require('./routers/route.js');
const app=express();
const port=5000;
const cors=require('cors');
const nodemailer = require('nodemailer');
app.use(express.json());
app.use(cors());
app.use('/api',route);

// Configure the SMTP transport
// const transporter = nodemailer.createTransport({
//     service: 'Gmail', // Replace with your SMTP service provider
//     auth: {
//       user: 'pavankumar.v3909@gmail.com', // Replace with your email
//       pass: 'Pavan9676', // Replace with your password
//     },
//     debug: true, // Add this line
//   });
  
//   app.get('/send-email', async (req, res) => {
//     try {
//       // Send the email
//       const info = await transporter.sendMail({
//         from: 'pavankumar.v3909@gmail.com',
//         to: 'pavankumar.v3909@gmail.com',
//         subject: 'Hello, World!',
//         text: 'Hello, World!',
//       });
  
//       console.log('Email sent:', info.response);
//       res.send('Email sent successfully.');
//     } catch (error) {
//       console.error('Error sending email:', error);
//       res.status(500).send('Error sending email.');
//     }
//   });
  
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
