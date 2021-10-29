
const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: process.env.API_KEY ||  '9fdca7d43f3dd88f4dadf3da1574e30b-aff2d1b9-75f1154f', // TODO: Replace with your mailgun API KEY
        domain: process.env.DOMAIN || 'sandbox4c21ef6afb8946c4974a783582648258.mailgun.org' // TODO: Replace with your mailgun DOMAIN
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));


const sendMail = (email, subject, text, cb) => {
    const mailOptions = {
        from: email, // TODO replace this with your own email
        to: 'dinuja124@gmail.com', // TODO: the receiver email has to be authorized for the free tier
        subject,
        text
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            return cb(err, null);
        }
        return cb(null, data);
    });
}

module.exports = sendMail;
