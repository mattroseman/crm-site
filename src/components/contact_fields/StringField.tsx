import * as React from 'react';

export interface StringFieldProps {
    label: string;
    handleChange: (value: string) => void;
}

export interface StringFieldState {
    value: string;
}

export default class StringField extends React.Component<StringFieldProps, StringFieldState> {
    constructor(props: StringFieldProps) {
        super(props);
        this.state = { value: '', };
    }

    render() {
        return (
            <div className="add-contact-label-field">
                <label className="add-contact-label">{this.props.label}</label>
                <input
                    className="add-contact-field"
                    type="text"
                    onChange={(event) => {
                        this.setState({
                            value: event.target.value,
                        }, () => this.props.handleChange(this.state.value));
                    }}
                />
            </div>
        );
    }
}
