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
    formKey: string;
    contact: Contact;
}

export default class ContactForm extends React.Component<ContactFormProps, ContactFormState> {
    constructor(props: ContactFormProps) {
        super(props);
        this.state = {
            title: props.newContact ? 'Add Contact' : 'Edit Contact',
            formKey: String((new Date()).getTime() / 1000),
            contact: props.initialContact ? props.initialContact : { firstName: '', lastName: '' },
        };

        this.handleFirstNameFieldChange = this.handleFirstNameFieldChange.bind(this);
        this.handleLastNameFieldChange = this.handleLastNameFieldChange.bind(this);
        this.handlePrimaryEmailFieldChange = this.handlePrimaryEmailFieldChange.bind(this);
        this.handleOtherEmailFieldChange = this.handleOtherEmailFieldChange.bind(this);
        this.handlePrimaryCompanyFieldChange = this.handlePrimaryCompanyFieldChange.bind(this);
        this.handleOtherCompanyFieldChange = this.handleOtherCompanyFieldChange.bind(this);
        this.handlePrimaryPhoneFieldChange = this.handlePrimaryPhoneFieldChange.bind(this);
        this.handleOtherPhoneFieldChange = this.handleOtherPhoneFieldChange.bind(this);
        this.handleLinkedInFieldChange = this.handleLinkedInFieldChange.bind(this);
        this.handleSlackServersChange = this.handleSlackServersChange.bind(this);
        this.handleLastContactedFieldChange = this.handleLastContactedFieldChange.bind(this);
        this.handleNotesFieldChange = this.handleNotesFieldChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // TODO I can't think of a better way of handling the different forms of input here, then to have
    // a function for each field. It is a bit repetitive, but it works for now.
    handleFirstNameFieldChange(value: string) {
        let newContact = this.state.contact;
        newContact.firstName = value;
        this.setState({
            contact: newContact,
        });
    }

    handleLastNameFieldChange(value: string) {
        let newContact = this.state.contact;
        newContact.lastName = value;
        this.setState({
            contact: newContact,
        });
    }

    handlePrimaryEmailFieldChange(value: string) {
        let newContact = this.state.contact;
        newContact.primaryEmail = value;
        this.setState({
            contact: newContact,
        });
    }

    handleOtherEmailFieldChange(value: string[]) {
        let newContact = this.state.contact;
        newContact.otherEmail = value;
        this.setState({
            contact: newContact,
        });
    }

    handlePrimaryCompanyFieldChange(value: string) {
        let newContact = this.state.contact;
        newContact.primaryCompany = value;
        this.setState({
            contact: newContact,
        });

    }

    handleOtherCompanyFieldChange(value: string[]) {
        let newContact = this.state.contact;
        newContact.otherCompany = value;
        this.setState({
            contact: newContact,
        });
    }

    handlePrimaryPhoneFieldChange(value: string) {
        let newContact = this.state.contact;
        newContact.primaryPhone = value;
        this.setState({
            contact: newContact,
        });
    }

    handleOtherPhoneFieldChange(value: string[]) {
        let newContact = this.state.contact;
        newContact.otherPhone = value;
        this.setState({
            contact: newContact,
        });
    }

    handleLinkedInFieldChange(value: string) {
        let newContact = this.state.contact;
        newContact.linkedIn = value;
        this.setState({
            contact: newContact,
        });
    }

    handleSlackServersChange(value: string[]) {
        let newContact = this.state.contact;
        newContact.slackServers = value;
        this.setState({
            contact: newContact,
        });
    }

    handleLastContactedFieldChange(value: Date) {
        let newContact = this.state.contact;
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

        // by changing the key of the form it should rerender everything
        this.setState({
            contact: {firstName: '', lastName: ''},
            formKey: String((new Date()).getTime() / 1000),
        });

        event.preventDefault();
    }

    render() {
        return (
            <form key={this.state.formKey} className="add-contact-form" onSubmit={this.handleSubmit}>
                <h1 className="add-contact-form-title">{this.state.title}</h1>
                <StringField
                    label="First Name:" 
                    handleChange={this.handleFirstNameFieldChange}
                />
                <StringField
                    label="Last Name:" 
                    handleChange={this.handleLastNameFieldChange}
                />
                <StringField
                    label="Primary Email:"
                    handleChange={this.handlePrimaryEmailFieldChange}
                />
                <StringArrayField
                    label="Other Emails:" 
                    handleChange={this.handleOtherEmailFieldChange}
                />
                <StringField
                    label="Primary Company:"
                    handleChange={this.handlePrimaryCompanyFieldChange}
                />
                <StringArrayField
                    label="Other Companies:"
                    handleChange={this.handleOtherCompanyFieldChange}
                />
                <StringField
                    label="Primary Phone:"
                    handleChange={this.handlePrimaryPhoneFieldChange}
                />
                <StringArrayField
                    label="Other Phones:" 
                    handleChange={this.handleOtherPhoneFieldChange}
                />
                <StringField
                    label="LinkedIn:"
                    handleChange={this.handleLinkedInFieldChange}
                />
                <StringArrayField
                    label="Slack Servers:"
                    handleChange={this.handleSlackServersChange}
                />
                <DateField
                    label="Last Contacted:" 
                    handleChange={this.handleLastContactedFieldChange}
                />
                <StringArrayField
                    label="Notes:" 
                    handleChange={this.handleNotesFieldChange}
                    isMultiline
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
