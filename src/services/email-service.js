const  sender = require('../config/emailConfig');

const TicketRepository=require('../repository/ticket-repository')
const repo = new TicketRepository();
const sendBasicEmail =(mailFrom,mailTo,mailSubject,mailBody)=>{
    sender.sendMail({
        from:mailFrom,
        to:mailTo,
        subject:mailSubject,
        text:mailBody
    });
}

const fetchPendingEmails =async(timestamp)=>{
    try {
        
        const response = await repo.get({status:"Pending"});
        return response; 
    } catch (error) {
        console.log(error);
    }
}

const createNotification =async(data)=>{
    try {
        const response =await repo.create(data);
        return response;
    } catch (error) {
        throw error;
    }
}


const updateTicket =async (ticketId,data)=>{
    try {
        const response =await repo.update(ticketId,data);
        return response;
    } catch (error) {
        throw error;
    }
}
module.exports={
    sendBasicEmail,
    fetchPendingEmails,
    createNotification,
    updateTicket
}

/**
 * SMTP ->a@b.com
 * 
 * receiver-> c@d.com
 * 
 * from: support@noti.com
 * 
 */