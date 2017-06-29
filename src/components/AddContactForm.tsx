import * as React from 'react';
import Contact from '../types/Contact';
import AddContactField from './AddContactField';


export interface AddContactFormProps {
    onSubmit: (contact: Contact) => void;
}

export interface AddContactFormState {
    [key: string]: string
    firstName: string;
    lastName: string;
    email?: string;
    phone?: string;
    birthday?: string;
    lastContacted?: string;
    notes?: string;
}

export default class AddContactForm extends React.Component<AddContactFormProps, AddContactFormState> {
    constructor(props: AddContactFormProps) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
        };

        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFieldChange(name: string, value: string) {
        let newState: AddContactFormState = this.state;
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
                <AddContactField 
                    ref="firstName" 
                    name="firstName" 
                    label="First Name:" 
                    handleChange={this.handleFieldChange}
                />
                <AddContactField 
                    ref="lastName" 
                    name="lastName" 
                    label="Last Name:" 
                    handleChange={this.handleFieldChange}
                />
                <AddContactField 
                    ref="email" 
                    name="email" 
                    label="Email:" 
                    handleChange={this.handleFieldChange}
                />
                <AddContactField 
                    ref="phone" 
                    name="phone" 
                    label="Phone:" 
                    handleChange={this.handleFieldChange}
                />
                <AddContactField 
                    ref="birthday" 
                    name="birthday" 
                    label="Birthday:" 
                    handleChange={this.handleFieldChange}
                />
                <AddContactField 
                    ref="lastContacted" 
                    name="lastContacted" 
                    label="Last Contacted:" 
                    handleChange={this.handleFieldChange}
                />
                <AddContactField 
                    ref="notes" 
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
