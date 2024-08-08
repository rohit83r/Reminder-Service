const  sender = require('../config/emailConfig');

const sendBasicEmail =(mailFrom,mailTo,mailSubject,mailBody)=>{
    sender.sendMail({
        from:mailFrom,
        to:mailTo,
        subject:mailSubject,
        text:mailBody
    });
}

module.exports={
    sendBasicEmail
}

/**
 * SMTP ->a@b.com
 * 
 * receiver-> c@d.com
 * 
 * from: support@noti.com
 * 
 */