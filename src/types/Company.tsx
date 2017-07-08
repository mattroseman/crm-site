interface Company {
    [key: string]: any;
    name: string;
    website?: string;
    email?: string[];
    primaryEmail?: number;
    phone?: string[];
    primaryPhone?: number;
    lastContacted?: Date;
    notes?: string[];
}

export default Company;
