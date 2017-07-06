// TODO add uuid
interface Contact {
    [key: string]: any;
    firstName: string;
    lastName: string;
    email: string[];
    company?: string[];
    phone?: string[];
    linkedIn?: string;
    slackServers?: string[];
    lastContacted?: Date;
    notes?: string[];
}

export default Contact;
