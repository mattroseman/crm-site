import * as React from 'react';

export interface ContactSearchBarProps {
    onInput: (search: string) => void;
}

export interface ContactSearchBarState {
    inputValue: string;
}

// TODO make this a form with a submit button, instead of messing with text input boxes

export default class ContactSearchBar extends React.Component<ContactSearchBarProps, ContactSearchBarState> {
    constructor(props: ContactSearchBarProps) {
        super(props);
        this.state = { inputValue: '' };
    }

    render() {
        return (
            <form>
                <input 
                    className="contact-search-bar" 
                    value={this.state.inputValue}
                    type="text" 
                    onInput={(evt) => {
                        this.setState({
                            inputValue: evt.target.value,
                        });
                        this.props.onInput(this.state.inputValue);
                    }}
                    maxLength={100} 
                />
            </form>
        );
    }
}

export class Input extends React.Component<undefined, undefined> {
    render() {

    }
}
