import * as React from 'react';

export interface ContactSearchBarProps {
    onChange: (search: string) => void;
}

export interface ContactSearchBarState {
    value: string;
}

export default class ContactSearchBar extends React.Component<ContactSearchBarProps, ContactSearchBarState> {
    constructor(props: ContactSearchBarProps) {
        super(props);
        this.state = { value: '' };
    }

    render() {
        return (
            <input 
                className="contact-search-bar" 
                type="text" 
                value={this.state.value}
                onChange={(event) => {
                    this.setState({
                        value: event.target.value,
                    }, () => this.props.onChange(this.state.value));
                }}
                maxLength={100} 
            />
        );
    }
}
