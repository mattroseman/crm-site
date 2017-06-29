import CalendarDate from './CalendarDate';

interface Contact {
    firstName: string;
    lastName: string;
    email?: string[]; // assumed index 0 is primary email
    company?: string[]; // assumed index 0 is current company
    phone?: string[]; // assumed index 0 is primary phone number
    birthday?: CalendarDate;
    lastContacted?: CalendarDate;
    notes?: string[];
}

export default Contact;
