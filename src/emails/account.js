const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email,name) => {
    sgMail.send({
        to: email,
        from: 'prashant131996@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome ${name}. Let me know how to get along with the app.`
    })
}

const sendDeletionEmail = (email,name) => {
    sgMail.send({
        to: email,
        from: 'prashant131996@gmail.com',
        subject: 'Account Deleted !!',
        text: `Sorry to let you go ${name}. Let me know what gone wrong.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendDeletionEmail
}