interface Company {
    [key: string]: any;
    uuid: string;
    name: string;
    website?: string;
    email?: string[];
    primaryEmail?: number;
    phone?: string[];
    primaryPhone?: number;
    lastContacted?: {
        date: Date;
        note: string;
    };
    reminder?: {
        date: Date;
        note: string;
    };
    notes?: string[];
}

export default Company;
