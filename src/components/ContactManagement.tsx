import * as React from 'react';
import Contact from '../types/Contact';
import FilterableContactCardList from './FilterableContactCardList';
import AddContactForm from './AddContactForm';

export interface ContactManagementProps {
    initialContacts: Contact[];
}

export default class ContactManagement extends React.Component<ContactManagementProps, undefined> {
    render() {
        return (
            <div className="contact-management">
                <FilterableContactCardList contacts={this.props.initialContacts} />
                <AddContactForm />
            </div>
        );
    }
}
