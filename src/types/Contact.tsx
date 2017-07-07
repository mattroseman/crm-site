// TODO add uuid
interface Contact {
    [key: string]: any;
    firstName: string;
    lastName: string;
    email: string[];
    primaryEmail: number;
    company?: string[];
    primaryCompany?: number;
    phone?: string[];
    primaryPhone?: number;
    linkedIn?: string;
    slackServers?: string[];
    lastContacted?: Date;
    notes?: string[];
}

export default Contact;
