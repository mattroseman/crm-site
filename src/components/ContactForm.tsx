import * as React from 'react';
import Contact from '../types/Contact';
import AddContactField from './ContactField';


export interface ContactFormProps {
    title: string;
    initialContact: Contact;
    onSubmit: (contact: Contact) => void;
}

export interface ContactFormState {
    [key: string]: string
    firstName: string;
    lastName: string;
    email?: string;
    company?: string;
    phone?: string;
    birthday?: string;
    lastContacted?: string;
    notes?: string;
}

export default class ContactForm extends React.Component<ContactFormProps, ContactFormState> {
    constructor(props: ContactFormProps) {
        super(props);
        this.state = {
            firstName: this.props.initialContact.firstName,
            lastName: this.props.initialContact.firstName,
            // TODO have this component work for add or edit
        };

        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFieldChange(name: string, value: string) {
        let newState: ContactFormState = this.state;
        newState[name] = value;
        this.setState(newState);
    }

    handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        let contact: Contact = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: [this.state.email],
            phone: [this.state.phone],
            //TODO handle converting string date to class CalendarDate
        };
        this.props.onSubmit(contact);

        event.preventDefault();
    }

    render() {
        return (
            <form className="add-contact-form" onSubmit={this.handleSubmit}>
                <h1 className="add-contact-form-title">{this.props.title}</h1>
                <AddContactField 
                    name="firstName" 
                    label="First Name:" 
                    handleChange={this.handleFieldChange}
                />
                <AddContactField 
                    name="lastName" 
                    label="Last Name:" 
                    handleChange={this.handleFieldChange}
                />
                <AddContactField 
                    name="email" 
                    label="Email:" 
                    handleChange={this.handleFieldChange}
                />
                <AddContactField
                    name="company"
                    label="Company:"
                    handleChange={this.handleFieldChange}
                />
                <AddContactField 
                    name="phone" 
                    label="Phone:" 
                    handleChange={this.handleFieldChange}
                />
                <AddContactField 
                    name="birthday" 
                    label="Birthday:" 
                    handleChange={this.handleFieldChange}
                />
                <AddContactField 
                    name="lastContacted" 
                    label="Last Contacted:" 
                    handleChange={this.handleFieldChange}
                />
                <AddContactField 
                    name="notes" 
                    label="Notes:" 
                    handleChange={this.handleFieldChange}
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
