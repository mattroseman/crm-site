import * as React from 'react';
import Contact from '../types/Contact';
import Company from '../types/Company';
import Header from './header/Header';
import FilterableCardList from './card_list/FilterableCardList';
import ContactForm from './form/ContactForm';
import CompanyForm from './form/CompanyForm';

export interface CRMSiteProps {
    initialContacts?: Contact[];
    initialCompanies?: Company[];
}

export interface CRMSiteState {
    contacts: Contact[];
    companies: Company[];
    currentlySelectedContact: Contact;
    currentlySelectedCompany: Company;
    isCurrentFormContact: boolean;
}

export default class CRMSite extends React.Component<CRMSiteProps, CRMSiteState> {
    constructor(props: CRMSiteProps) {
        super(props);
        this.state = {
            contacts: props.initialContacts ? props.initialContacts : [],
            companies: props.initialCompanies ? props.initialCompanies : [],
            currentlySelectedContact: null,
            currentlySelectedCompany: null,
            isCurrentFormContact: true,
        };

        this.handleContactFormSubmit = this.handleContactFormSubmit.bind(this);
        this.handleContactEdit = this.handleContactEdit.bind(this);
        this.handleNewContact = this.handleNewContact.bind(this);

        this.handleCompanyFormSubmit = this.handleCompanyFormSubmit.bind(this);
        this.handleCompanyEdit = this.handleCompanyEdit.bind(this);
        this.handleNewCompany = this.handleNewCompany.bind(this);
    }

    handleContactFormSubmit(contact: Contact) {
        let newContacts: Contact[] = this.state.contacts;
        for (let i = 0; i < newContacts.length; i++) {
            if (newContacts[i].uuid == contact.uuid) {
                newContacts[i] = contact;
                this.setState({
                    contacts: newContacts,
                    currentlySelectedContact: null,
                });
                return;
            }
        }
        newContacts.push(contact);
        this.setState({
            contacts: newContacts,
            currentlySelectedContact: null,
        });
    }

    handleContactEdit(contact: Contact) {
        this.setState({
            currentlySelectedContact: contact,
            isCurrentFormContact: true,
        });
    }

    handleNewContact() {
        this.setState({
            currentlySelectedContact: null,
            isCurrentFormContact: true,
        });
    }

    handleCompanyFormSubmit(company: Company) {
        let newCompanies = this.state.companies;
        for (let i = 0; i < newCompanies.length; i++) {
            if (newCompanies[i].uuid == company.uuid) {
                newCompanies[i] = company;
                this.setState({
                    companies: newCompanies,
                    currentlySelectedCompany: null,
                });
                return;
            }
        }
        newCompanies.push(company);
        this.setState({
            companies: newCompanies,
            currentlySelectedCompany: null,
        });
    }

    handleCompanyEdit(company: Company) {
        this.setState({
            currentlySelectedCompany: company,
            isCurrentFormContact: false,
        });
    }

    handleNewCompany() {
        this.setState({
            currentlySelectedCompany: null,
            isCurrentFormContact: false,
        });
    }

    render() {
        let form: JSX.Element;
        if (this.state.isCurrentFormContact) {
            form = (
                <ContactForm
                    key={this.state.currentlySelectedContact ? this.state.currentlySelectedContact.uuid : null}
                    initialContact={this.state.currentlySelectedContact}
                    onSubmit={this.handleContactFormSubmit}
                />
            );
        } else {
            form = (
                <CompanyForm
                    key={this.state.currentlySelectedCompany ? this.state.currentlySelectedCompany.name : null}
                    initialCompany={this.state.currentlySelectedCompany}
                    onSubmit={this.handleCompanyFormSubmit}
                />
            );
        }
        return (
            <div className="crm-site">
                <Header onNewContact={this.handleNewContact} onNewCompany={this.handleNewCompany} />
                {form}
                <FilterableCardList 
                    contacts={this.state.contacts} 
                    companies={this.state.companies}
                    onContactEdit={this.handleContactEdit}
                    onCompanyEdit={this.handleCompanyEdit}
                />
            </div>
        );
    }
}
