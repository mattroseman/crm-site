// TODO add uuid
interface Contact {
    [key: string]: any;
    uuid: string;
    firstName: string;
    lastName: string;
    email: string[];
    primaryEmail: number;
    company?: string[];
    primaryCompany?: number;
    phone?: string[];
    primaryPhone?: number;
    websites?: string[];
    lastContacted?: Date;
    notes?: string[];
}

export default Contact;
