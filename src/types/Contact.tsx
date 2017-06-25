import CalendarDate from './CalendarDate';

interface Contact {
    firstName: string;
    lastName: string;
    email?: string[];
    phone?: string[];
    birthday?: CalendarDate;
    lastContacted?: CalendarDate;
    notes?: string[];
}

export default Contact;
