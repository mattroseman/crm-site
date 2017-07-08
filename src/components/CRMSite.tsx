import * as React from 'react';
import Contact from '../types/Contact';
import Company from '../types/Company';
import Header from './header/Header';
import FilterableContactCardList from './contact_list/FilterableContactCardList';
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

        this.handleContactFormSubmit = this.handleCompanyFormSubmit.bind(this);
        this.handleContactEdit = this.handleContactEdit.bind(this);
        this.handleNewContact = this.handleNewContact.bind(this);

        this.handleCompanyFormSubmit = this.handleCompanyFormSubmit.bind(this);
        this.handleCompanyEdit = this.handleCompanyEdit.bind(this);
        this.handleNewCompany = this.handleNewCompany.bind(this);
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

    handleNewContact() {
        this.setState({
            currentlySelectedContact: null,
            isCurrentFormContact: true,
        });
    }

    handleCompanyFormSubmit(company: Company) {
        let newCompanies: Company[] = this.state.companies;
        newCompanies.push(company);
        this.setState({
            companies: newCompanies,
            currentlySelectedCompany: null,
        });
    }

    handleCompanyEdit(company: Company) {
        this.setState({
            currentlySelectedCompany: company,
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
                    key={this.state.currentlySelectedContact ? this.state.currentlySelectedContact.email[this.state.currentlySelectedContact.primaryEmail] : null}
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
                <FilterableContactCardList contacts={this.state.contacts} onContactEdit={this.handleContactEdit}/>
            </div>
        );
    }
}
