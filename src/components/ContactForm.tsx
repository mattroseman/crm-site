import * as React from 'react';
import Contact from '../types/Contact';
import StringField from './contact_fields/StringField';
import StringArrayField from './contact_fields/StringArrayField'; import DateField from './contact_fields/DateField'; 

export interface ContactFormProps {
    initialContact?: Contact;
    onSubmit: (contact: Contact) => void;
}

export interface ContactFormState {
    title: string;
    formKey: string;
    contact: Contact;
}

export default class ContactForm extends React.Component<ContactFormProps, ContactFormState> {
    constructor(props: ContactFormProps) {
        super(props);
        this.state = {
            title: props.initialContact ? 'Edit Contact' : 'Add Contact',
            formKey: String((new Date()).getTime() / 1000),
            contact: props.initialContact ? props.initialContact : { firstName: '', lastName: '', email: [''] },
        };


        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFieldChange(name: string, value: any) {
        let newContact = this.state.contact;
        newContact[name] = value;
        this.setState({ contact: newContact, });
    }

    handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        // TODO validate all the input before adding it to state
        this.props.onSubmit(this.state.contact);

        // by changing the key of the form it should rerender everything
        this.setState({
            contact: {firstName: '', lastName: '', email: [''],},
            formKey: String((new Date()).getTime() / 1000),
        });

        event.preventDefault();
    }

    render() {
        return (
            <form key={this.state.formKey} className="contact-form" onSubmit={this.handleSubmit}>
                <h1 className="add-contact-form-title">{this.state.title}</h1>
                <StringField
                    name="firstName"
                    label="First Name:" 
                    initialValue={this.state.contact.firstName ? this.state.contact.firstName : ''}
                    handleChange={this.handleFieldChange}
                />
                <StringField
                    name="lastName"
                    label="Last Name:" 
                    initialValue={this.state.contact.lastName ? this.state.contact.lastName : ''}
                    handleChange={this.handleFieldChange}
                />
                <StringArrayField
                    name="email"
                    label="Email:"
                    initialValue={this.state.contact.email ? this.state.contact.email : ['']}
                    handleChange={this.handleFieldChange}
                />
                <StringArrayField
                    name="company"
                    label="Company:"
                    initialValue={this.state.contact.company ? this.state.contact.company : ['']}
                    handleChange={this.handleFieldChange}
                />
                <StringArrayField
                    name="phone"
                    label="Phone Number:" 
                    initialValue={this.state.contact.phone ? this.state.contact.phone : ['']}
                    handleChange={this.handleFieldChange}
                />
                <StringField
                    name="linkedIn"
                    label="LinkedIn:"
                    initialValue={this.state.contact.linkedIn ? this.state.contact.linkedIn : ''}
                    handleChange={this.handleFieldChange}
                />
                <StringArrayField
                    name="slackServers"
                    label="Slack Servers:"
                    initialValue={this.state.contact.slackServers ? this.state.contact.slackServers : ['']}
                    handleChange={this.handleFieldChange}
                />
                <DateField
                    name="lastContacted"
                    label="Last Contacted:" 
                    initialValue={this.state.contact.lastContacted ? this.state.contact.lastContacted : null}
                    handleChange={this.handleFieldChange}
                />
                <StringArrayField
                    name="notes"
                    label="Notes:" 
                    initialValue={this.state.contact.notes ? this.state.contact.notes : ['']}
                    handleChange={this.handleFieldChange}
                    isMultiline
                />

                <input 
                    className="add-contact-submit" 
                    type="submit" 
                    value="Save Contact" 
                />
            </form>
        );
    }
}
