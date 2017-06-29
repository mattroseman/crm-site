import * as React from 'react';
import Contact from '../types/Contact';
import FilterableContactCardList from './FilterableContactCardList';
import AddContactForm from './AddContactForm';

export interface ContactManagementProps {
    initialContacts: Contact[];
}

export interface ContactManagementState {
    contacts: Contact[];
}


export default class ContactManagement extends React.Component<ContactManagementProps, ContactManagementState> {
    constructor(props: ContactManagementProps) {
        super(props);
        this.state = {
            contacts: props.initialContacts,
        };

        this.handleNewContact = this.handleNewContact.bind(this);
    }


    handleNewContact(contact: Contact) {
        let newContacts: Contact[] = this.state.contacts;
        newContacts.push(contact);
        this.setState({
            contacts: newContacts,
        });
    }

    render() {
        return (
            <div className="contact-management">
                <FilterableContactCardList contacts={this.state.contacts} />
                <AddContactForm onSubmit={this.handleNewContact} />
            </div>
        );
    }
}
