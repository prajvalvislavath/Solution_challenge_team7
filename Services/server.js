const express = require('express');
const app = express();
const cors = require('cors');
const nodemailer = require('nodemailer');

app.use(cors());
app.use(express.json());

// Create a transporter for sending emails
const transporter = nodemailer.createTransport({
  host: 'smtp.office365.com',
  port: 587,
  secure: false,
  auth: {
    user: 'lethaldeath54@gmail.com', 
    pass: '$<Rswli.lbfd' 
  }
});


app.post('/send-email', (req, res) => {
  const { recipient, subject, content } = req.body;
console.log(recipient)
  const mailOptions = {
    from: 'lethaldeath54@gmail.com',
    to: recipient,
    subject: subject,
    text: content
  };

  transporter.sendMail(mailOptions, (error, info) => {
    console.log(mailOptions)
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email', details: error.message });
    } else {
      console.log('Email sent:', info.response);
      res.json({ message: 'Email sent successfully' });
    }
  });
});


app.listen(1500, () => {
  console.log('Server is running on port 1500');
});
