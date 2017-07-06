import * as React from 'react';
import Contact from '../types/Contact';
import FilterableContactCardList from './FilterableContactCardList';
import ContactForm from './ContactForm';

export interface ContactManagementProps {
    initialContacts: Contact[];
}

export interface ContactManagementState {
    contacts: Contact[];
    currentlySelectedContact: Contact;
}


export default class ContactManagement extends React.Component<ContactManagementProps, ContactManagementState> {
    constructor(props: ContactManagementProps) {
        super(props);
        this.state = {
            contacts: props.initialContacts,
            currentlySelectedContact: null,
        };

        this.handleNewContact = this.handleNewContact.bind(this);
        this.handleContactCardClick = this.handleContactCardClick.bind(this);
    }


    // TODO make this handleEditContact and update a changed contact, or delete it.
    handleNewContact(contact: Contact) {
        let newContacts: Contact[] = this.state.contacts;
        newContacts.push(contact);
        this.setState({
            contacts: newContacts,
        });
    }

    // TODO This isn't updating the contactCardList, and might do with the improper Date type instead of Moment
    handleContactCardClick(contact: Contact) {
        this.setState({
            currentlySelectedContact: contact,
        });
    }

    render() {
        return (
            <div className="contact-management">
                <ContactForm
                    key={this.state.currentlySelectedContact ? this.state.currentlySelectedContact.primaryEmail : null}
                    initialContact={this.state.currentlySelectedContact}
                    onSubmit={this.handleNewContact}
                />
                <FilterableContactCardList contacts={this.state.contacts} onContactCardClick={this.handleContactCardClick}/>
            </div>
        );
    }
}
