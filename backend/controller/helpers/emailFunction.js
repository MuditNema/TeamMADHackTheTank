const emailjs = require('@emailjs/browser')

module.exports = {
    sendMail : async (data,token) => {
        const message = "This is the message to send"
        const emailInputs = {
            fname:data.fname,
            lname:data.lname,
            url : "" + token,
            message
        }
        await emailjs.send(service_na2qwry,template_up869fa,emailInputs,QF4UVhq5IcR0nAXXx)
    }
}