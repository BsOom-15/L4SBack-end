const nodemailer = require('nodemailer');

const sendEmail = async (req, res) => {
    const { name, email, message } = req.body; 
    console.log('Received Data:', { name, email, message });

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,  // البريد الإلكتروني
            pass: process.env.EMAIL_PASS,  // كلمة مرور التطبيق أو كلمة المرور العادية
        },
    });
    

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER, 
        subject: `Message from ${name}`,
        text: `Message from ${name} (${email}): ${message}`, 
        replyTo: email,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email Sent Successfully');
    } catch (error) {
        console.error('Error Details:', error); 
        res.status(500).send(`Error Sending Email: ${error.message}`);
    }
};

module.exports = { sendEmail };
