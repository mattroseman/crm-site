import * as React from 'react';

export interface StringFieldProps {
    name: string;
    label: string;
    initialValue: string;
    handleChange: (name: string, value: string) => void;
}

export interface StringFieldState {
    value: string;
}

export default class StringField extends React.Component<StringFieldProps, StringFieldState> {
    constructor(props: StringFieldProps) {
        super(props);
        this.state = { value: props.initialValue, };
    }

    render() {
        return (
            <div className="add-contact-label-field">
                <label className="add-contact-label">{this.props.label}</label>
                <input
                    className="add-contact-field"
                    type="text"
                    value={this.state.value}
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
