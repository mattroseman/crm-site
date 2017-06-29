import * as React from 'react';

export interface AddContactFieldProps {
    name: string;
    label: string;
    handleChange: (fieldName: string, fieldValue: string) => void;
}

export interface AddContactFieldState {
    value: string;
}

export default class AddContactField extends React.Component<AddContactFieldProps, AddContactFieldState> {
    constructor(props: AddContactFieldProps) {
        super(props);
        this.state = { 
            value: '', 
        };
    }

    render() {
        return (
            <div className="add-contact-label-field">
                <label className="add-contact-label">{this.props.label}</label>
                <input 
                    className="add-contact-field" 
                    type="text" 
                    name={this.props.name} 
                    onChange={(event) => {
                        this.setState({
                            value: event.target.value,
                        }, () => this.props.handleChange(this.props.name, this.state.value));
                    }}
                />
            </div>
        );
    }
}
