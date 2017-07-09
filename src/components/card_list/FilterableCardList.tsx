import * as React from 'react';
import Contact from '../../types/Contact';
import Company from '../../types/Company';
import CardListSearchBar from './CardListSearchBar';
import CardList from './CardList';

export interface FilterableCardListProps {
    contacts: Contact[];
    companies: Company[];
    onContactEdit: (contact: Contact) => void;
    onCompanyEdit: (company: Company) => void;
}

export interface FilterableCardListState {
    contacts: Contact[];
    companies: Company[];
}

export default class FilterableCardList extends React.Component<FilterableCardListProps, FilterableCardListState> {
    constructor(props: FilterableCardListProps) {
        super(props);
        this.state = {
            contacts: props.contacts,
            companies: props.companies,
        };

        this.handleSearchInput = this.handleSearchInput.bind(this);
    }

    // searchMatchesValue checks to see if the query string is found in the value string, ignoreing case
    searchMatchesValue(search: string, value: string) {
        return value.toUpperCase().indexOf(search.toUpperCase()) !== -1;
    }

    contactMatchesSearch(search: string, contact: Contact) {
        return (
            this.searchMatchesValue(search, (contact.firstName + ' ' + contact.lastName)) ||
            contact.email.some((email: string) => {return this.searchMatchesValue(search, email);}) ||
            contact.company.some((company: string) => {return this.searchMatchesValue(search, company);})
        );
    }

    companyMatchesSearch(search: string, company: Company) {
        return (
            this.searchMatchesValue(search, company.name) ||
            company.email.some((email: string) => {return this.searchMatchesValue(search, email);}) ||
            this.searchMatchesValue(search, company.website)
        );
    }

    handleSearchInput(search: string) {
        this.setState({
            contacts: search ? this.props.contacts.filter((contact) => { 
                return this.contactMatchesSearch(search, contact);
            }) : this.props.contacts,
            companies: search ? this.props.companies.filter((company) => {
                return this.companyMatchesSearch(search, company);
            }) : this.props.companies,
        });
    }

    render() {
        return (
            <div className="filterable-card-list">
                <CardListSearchBar onChange={this.handleSearchInput}/>
                <CardList 
                    contacts={this.state.contacts} 
                    companies={this.state.companies} 
                    onContactCardEdit={this.props.onContactEdit}
                    onCompanyCardEdit={this.props.onCompanyEdit}
                />
            </div>
        );
    }
}
