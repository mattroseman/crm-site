import * as React from 'react';
import Contact from '../types/Contact';
import FormElement from './form_element/FormElement';

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
        this.handleMultiFieldChange = this.handleMultiFieldChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }

    handleFieldChange(name: string, value: any) {
        let newContact = this.state.contact;
        newContact[name] = value;
        this.setState({ contact: newContact, });
    }

    handleMultiFieldChange(name: string, value: string[], primaryIndex: number) {
        let newContact = this.state.contact;
        newContact[name] = value;
        newContact['primary' + name[0].toUpperCase() + name.slice(1)] = primaryIndex;
        this.setState({ contact: newContact, });
    }

    handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        // TODO validate all the input before adding it to state
        this.props.onSubmit(this.state.contact);

        // reset the form
        this.resetForm();

        event.preventDefault();
    }

    resetForm() {
        // by changing the key of the form it should rerender everything
        this.setState({
            contact: { firstName: '', lastName: '', email: [''], primaryEmail: 0 },
            formKey: String((new Date()).getTime() / 1000),
        });
    }

    render() {
        return (
            <form key={this.state.formKey} className="form" onSubmit={this.handleSubmit}>
                <h1 className="form__title">{this.state.title}</h1>
                <FormElement
                    name="firstName"
                    label="First Name:"
                    initialValue={this.state.contact.firstName ? this.state.contact.firstName : ''}
                    onChange={this.handleFieldChange}
                />
                <FormElement
                    name="lastName"
                    label="Last Name:"
                    initialValue={this.state.contact.lastName ? this.state.contact.lastName : ''}
                    onChange={this.handleFieldChange}
                />
                <FormElement
                    name="email"
                    label="Email:"
                    initialValue={this.state.contact.email ? this.state.contact.email : ['']}
                    hasMultipleFields
                    hasPrimaryIdentifier
                    initialPrimaryIndex={this.state.contact.primaryEmail ? this.state.contact.primaryEmail : 0}
                    onChange={this.handleMultiFieldChange}
                />
                <FormElement
                    name="company"
                    label="Company:"
                    initialValue={this.state.contact.company ? this.state.contact.company : ['']}
                    hasMultipleFields
                    hasPrimaryIdentifier
                    initialPrimaryIndex={this.state.contact.primaryCompany ? this.state.contact.primaryCompany : 0}
                    onChange={this.handleMultiFieldChange}
                />
                <FormElement
                    name="phone"
                    label="Phone Number:"
                    initialValue={this.state.contact.phone ? this.state.contact.phone : ['']}
                    hasMultipleFields
                    hasPrimaryIdentifier
                    initialPrimaryIndex={this.state.contact.primaryPhone ? this.state.contact.primaryPhone : 0}
                    onChange={this.handleMultiFieldChange}
                />
                <FormElement
                    name="linkedIn"
                    label="LinkedIn:"
                    initialValue={this.state.contact.linkedIn ? this.state.contact.linkedIn : ''}
                    onChange={this.handleFieldChange}
                />
                <FormElement
                    name="slackServers"
                    label="Slack Servers:"
                    initialValue={this.state.contact.slackServers ? this.state.contact.slackServers : ['']}
                    hasMultipleFields
                    onChange={this.handleMultiFieldChange}
                />
                <FormElement
                    name="lastContacted"
                    label="Last Contacted:"
                    initialValue={this.state.contact.lastContacted ? this.state.contact.lastContacted : null}
                    isDateField
                    onChange={this.handleFieldChange}
                />
                <FormElement
                    name="notes"
                    label="Notes:"
                    initialValue={this.state.contact.notes ? this.state.contact.notes : ['']}
                    hasMultipleFields
                    isMultiline
                    onChange={this.handleMultiFieldChange}
                />

                <input 
                    className="form__submit" 
                    type="submit" 
                    value="Save Contact" 
                />
            </form>
        );
    }
}
