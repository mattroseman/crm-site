// TODO add uuid
interface Contact {
    [key: string]: any;
    firstName: string;
    lastName: string;
    primaryEmail: string;
    otherEmail?: string[];
    primaryCompany?: string;
    otherCompany?: string[];
    primaryPhone?: string;
    otherPhone?: string[];
    linkedIn?: string;
    slackServers?: string[];
    lastContacted?: Date;
    notes?: string[];
}

export default Contact;
