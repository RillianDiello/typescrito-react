
interface IMailTo {
    name: string;
    email: string;
}

interface IMailMessage {
    subject: string;
    body: string;
    attachment ?: string[];
}

interface IMessageDTO {
    to: IMailTo;
    message: IMailMessage
}

interface IEmailService {
    sendMail(Request: IMessageDTO)
}

class EmailService {
    sendMail({ to, message }: IMessageDTO){
        console.log(`Email enviado ${to.name}: ${message.subject}`);
    }

}

export default EmailService;