import * as React from 'react';
import Contact from '../types/Contact';
import ContactCard from './ContactCard';

export interface ContactCardListProps {
    contacts: Contact[];
}

export default class ContactCardList extends React.Component<ContactCardListProps, undefined> {
    render() {
        const contactList = this.props.contacts.map((contact: Contact) => {
            let fn = contact.firstName;
            let ln = contact.lastName;
            return (<ContactCard key={fn+ln} firstName={fn} lastName={ln} />);
        });

        return (
            <ul className="contact-card-list">{contactList}</ul>
        );
    }
}
