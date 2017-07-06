import * as React from 'react';
import Contact from '../types/Contact';
import ContactCard from './ContactCard';

export interface ContactCardListProps {
    contacts: Contact[];
    onContactCardClick: (contact: Contact) => void;
}

export default class ContactCardList extends React.Component<ContactCardListProps, undefined> {
    render() {
        const contactList = this.props.contacts.map((contact: Contact) => {
            return (
                <ContactCard 
                    key={contact.firstName + contact.lastName} 
                    contact={contact}
                    onClick={this.props.onContactCardClick}
                />
            );
        });

        return (
            <div className="contact-card-list">{contactList}</div>
        );
    }
}
