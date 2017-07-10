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
    lastContacted?: {
        date: Date;
        note: string;
    }
    reminder?: {
        date: Date;
        note: string;
    }
    notes?: string[];
}

export default Contact;
