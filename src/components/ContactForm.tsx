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
            contact: props.initialContact ? props.initialContact : { firstName: '', lastName: '', email: [''], primaryEmail: 0 },
        };


        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.handleStringArrayFieldChange = this.handleStringArrayFieldChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFieldChange(name: string, value: any) {
        let newContact = this.state.contact;
        newContact[name] = value;
        this.setState({ contact: newContact, });
    }

    handleStringArrayFieldChange(name: string, value: string[], primaryIndex: number) {
        let newContact = this.state.contact;
        newContact[name] = value;
        newContact['primary' + name[0].toUpperCase() + name.slice(1)] = primaryIndex;
        this.setState({ contact: newContact, });
    }

    handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        // TODO validate all the input before adding it to state
        this.props.onSubmit(this.state.contact);

        // by changing the key of the form it should rerender everything
        this.setState({
            contact: { firstName: '', lastName: '', email: [''], primaryEmail: 0 },
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
                    initialPrimaryIndex={this.state.contact.primaryEmail ? this.state.contact.primaryEmail : 0}
                    handleChange={this.handleStringArrayFieldChange}
                />
                <StringArrayField
                    name="company"
                    label="Company:"
                    initialValue={this.state.contact.company ? this.state.contact.company : ['']}
                    initialPrimaryIndex={this.state.contact.primaryCompany ? this.state.contact.primaryCompany : 0}
                    handleChange={this.handleStringArrayFieldChange}
                />
                <StringArrayField
                    name="phone"
                    label="Phone Number:" 
                    initialValue={this.state.contact.phone ? this.state.contact.phone : ['']}
                    initialPrimaryIndex={this.state.contact.primaryPhone ? this.state.contact.primaryPhone : 0}
                    handleChange={this.handleStringArrayFieldChange}
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
                    initialPrimaryIndex={this.state.contact.primarySlackServer ? this.state.contact.primarySlackServer : 0}
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
                    initialPrimaryIndex={this.state.contact.primaryNote ? this.state.contact.primaryNote : 0}
                    handleChange={this.handleStringArrayFieldChange}
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
