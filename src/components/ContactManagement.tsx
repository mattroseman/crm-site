import * as React from 'react';
import Contact from '../types/Contact';
import FilterableContactCardList from './contact_list/FilterableContactCardList';
import ContactForm from './form/ContactForm';

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

        this.handleContactFormSubmit = this.handleContactFormSubmit.bind(this);
        this.handleContactEdit = this.handleContactEdit.bind(this);
    }


    // TODO check to see if there is an existin gcontact, and if there is 
    handleContactFormSubmit(contact: Contact) {
        let newContacts: Contact[] = this.state.contacts;
        newContacts.push(contact);
        this.setState({
            contacts: newContacts,
            currentlySelectedContact: null,
        });
    }

    handleContactEdit(contact: Contact) {
        this.setState({
            currentlySelectedContact: contact,
        });
    }

    render() {
        return (
            <div className="contact-management">
                <ContactForm
                    key={this.state.currentlySelectedContact ? this.state.currentlySelectedContact.email[this.state.currentlySelectedContact.primaryEmail] : null}
                    initialContact={this.state.currentlySelectedContact}
                    onSubmit={this.handleContactFormSubmit}
                />
                <FilterableContactCardList contacts={this.state.contacts} onContactEdit={this.handleContactEdit}/>
            </div>
        );
    }
}
