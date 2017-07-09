import * as React from 'react';
import Contact from '../../types/Contact';
import Company from '../../types/Company';
import Card from './Card';

export interface CardListProps {
    contacts: Contact[];
    companies: Company[];
    onContactCardEdit: (contact: Contact) => void;
    onCompanyCardEdit: (company: Company) => void;
}

export default class CardList extends React.Component<CardListProps, undefined> {
    render() {
        const contactList = this.props.contacts.map((contact: Contact) => {
            return (
                <Card 
                    key={contact.uuid} 
                    cardInfo={[
                        (contact.firstName ? contact.firstName : '') + ' ' + (contact.lastName ? contact.lastName : ''),
                        contact.email ? contact.email[contact.primaryEmail] : '',
                        contact.company ? contact.company[contact.primaryCompany] : ''
                    ]}
                    onEdit={() => this.props.onContactCardEdit(contact)}
                />
            );
        });

        const companyList = this.props.companies.map((company: Company) => {
            return (
                <Card
                    key={company.uuid}
                    cardInfo={[
                        company.name ? company.name : '',
                        company.website ? company.website : '',
                        company.email && company.primaryEmail ? company.email[company.primaryEmail] : '',
                    ]}
                    onEdit={() => this.props.onCompanyCardEdit(company)}
                />
            );
        });

        return (
            <div className="card-list">{contactList.concat(companyList)}</div>
        );
    }
}
