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

    handleSearchInput(search: string) {
        // TODO search through all emails, not jsut primary
        // same for company
        this.setState({
            contacts: search ? this.props.contacts.filter((contact) => { 
                return (
                    contact.firstName + ' ' + contact.lastName).toUpperCase().indexOf(search.toUpperCase()) !== -1 ||
                    contact.email[contact.primaryEmail].toUpperCase().indexOf(search.toUpperCase()) !== -1 ||
                    contact.company[contact.primaryCompany].toUpperCase().indexOf(search.toUpperCase()) !== -1;
            }) : this.props.contacts,
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
