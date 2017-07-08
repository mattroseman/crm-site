import * as React from 'react';
import Contact from '../../types/Contact';

export interface ContactCardProps {
    contact: Contact;
    onEdit: (contact: Contact) => void;
}

export default class ContactCard extends React.Component<ContactCardProps, undefined> {
    render() {
        return (
            <div className="contact-card" onClick={() => {this.props.onEdit(this.props.contact)}}>
                <div className="contact-card__info">
                    {this.props.contact.firstName} {this.props.contact.lastName}<br/>
                    {this.props.contact.email[this.props.contact.primaryEmail]}<br/>
                    {this.props.contact.company ? this.props.contact.company[this.props.contact.primaryCompany] : ''}
                </div>
                <div className="contact-card__status">
                </div>
            </div>
        );
    }
}
