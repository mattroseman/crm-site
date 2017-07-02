import * as React from 'react';
import Contact from '../types/Contact';
import StringField from './contact_fields/StringField';
import StringArrayField from './contact_fields/StringArrayField';
import DateField from './contact_fields/DateField';


export interface ContactFormProps {
    newContact: boolean;
    initialContact?: Contact;
    onSubmit: (contact: Contact) => void;
}

//export interface ContactFormState {
//    [key: string]: string
//    firstName: string;
//    lastName: string;
//    email?: string;
//    company?: string;
//    phone?: string;
//    birthday?: string;
//    lastContacted?: string;
//    notes?: string;
//}

export interface ContactFormState {
    title: string;
    contact: Contact;
}

export default class ContactForm extends React.Component<ContactFormProps, ContactFormState> {
    constructor(props: ContactFormProps) {
        super(props);
        this.state = {
            title: props.newContact ? 'Add Contact' : 'Edit Contact',
            contact: props.initialContact ? props.initialContact : { firstName: '', lastName: '' },
        };

        this.handleFirstNameFieldChange = this.handleFirstNameFieldChange.bind(this);
        this.handleLastNameFieldChange = this.handleLastNameFieldChange.bind(this);
        this.handleEmailFieldChange = this.handleEmailFieldChange.bind(this);
        this.handleCompanyFieldChange = this.handleCompanyFieldChange.bind(this);
        this.handlePhoneFieldChange = this.handlePhoneFieldChange.bind(this);
        this.handleBirthdayFieldChange = this.handleBirthdayFieldChange.bind(this);
        this.handleLastContactedFieldChange = this.handleLastContactedFieldChange.bind(this);
        this.handleNotesFieldChange = this.handleNotesFieldChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // TODO I can't think of a better way of handling the different forms of input here, then to have
    // a function for each field. It is a bit repetitive, but it works for now.
    handleFirstNameFieldChange(value: string) {
        let newContact = this.state.contact
        newContact.firstName = value;
        this.setState({
            contact: newContact,
        });
    }

    handleLastNameFieldChange(value: string) {
        let newContact = this.state.contact
        newContact.lastName = value;
        this.setState({
            contact: newContact,
        });
    }

    handleEmailFieldChange(value: string[]) {
        let newContact = this.state.contact
        newContact.email = value;
        this.setState({
            contact: newContact,
        });
    }

    handleCompanyFieldChange(value: string[]) {
        let newContact = this.state.contact
        newContact.company = value;
        this.setState({
            contact: newContact,
        });
    }

    handlePhoneFieldChange(value: string[]) {
        let newContact = this.state.contact
        newContact.phone = value;
        this.setState({
            contact: newContact,
        });
    }

    handleBirthdayFieldChange(value: Date) {
        let newContact = this.state.contact
        newContact.birthday = value;
        this.setState({
            contact: newContact,
        });
    }

    handleLastContactedFieldChange(value: Date) {
        let newContact = this.state.contact
        newContact.lastContacted = value;
        this.setState({
            contact: newContact,
        });
    }

    handleNotesFieldChange(value: string[]) {
        let newContact = this.state.contact
        newContact.notes = value;
        this.setState({
            contact: newContact,
        });
    }

    handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        // TODO validate all the input before adding it to state
        this.props.onSubmit(this.state.contact);

        event.preventDefault();
    }

    render() {
        return (
            <form className="add-contact-form" onSubmit={this.handleSubmit}>
                <h1 className="add-contact-form-title">{this.state.title}</h1>
                <StringField
                    label="First Name:" 
                    handleChange={this.handleFirstNameFieldChange}
                />
                <StringField
                    label="Last Name:" 
                    handleChange={this.handleLastNameFieldChange}
                />
                <StringArrayField
                    label="Email:" 
                    handleChange={this.handleEmailFieldChange}
                />
                <StringArrayField
                    label="Company:"
                    handleChange={this.handleCompanyFieldChange}
                />
                <StringArrayField
                    label="Phone:" 
                    handleChange={this.handlePhoneFieldChange}
                />
                <DateField
                    label="Birthday:" 
                    handleChange={this.handleBirthdayFieldChange}
                />
                <DateField
                    label="Last Contacted:" 
                    handleChange={this.handleLastContactedFieldChange}
                />
                <StringArrayField
                    label="Notes:" 
                    handleChange={this.handleNotesFieldChange}
                />

                <input 
                    className="add-contact-submit" 
                    type="submit" 
                    value="Add Contact" 
                />
            </form>
        );
    }
}
