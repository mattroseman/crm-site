import * as React from 'react';
import Contact from '../types/Contact';
import ContactSearchBar from './ContactSearchBar';
import ContactCardList from './ContactCardList';

export interface FilterableContactCardListProps {
    contacts: Contact[];
}

export interface FilterableContactCardListState {
    contacts: Contact[];
}

export default class FilterableContactCardList extends React.Component<FilterableContactCardListProps, FilterableContactCardListState> {
    constructor(props: FilterableContactCardListProps) {
        super(props);
        this.state = {
            contacts: this.props.contacts,
        };
    }

    handleSearchInput(search: string) {
        // TODO filter the contacts list to just those that have been searched
        this.setState({
            contacts: this.state.contacts.filter((contact) => {
                return (contact.firstName.indexOf(search) !== -1 || 
                    contact.lastName.indexOf(search) !== -1);
            }),
        });
    }

    render() {
        return (
            <div className="filterable-contact-card-list">
                <ContactSearchBar onInput={(search: string) => handleSearchInput(search)}/>
                <ContactCardList contacts={this.state.contacts} />
            </div>
        );
    }
}
