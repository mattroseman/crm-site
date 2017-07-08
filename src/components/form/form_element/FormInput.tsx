import * as React from 'react';

export interface FormInputProps {
    initialValue: string;
    onChange: (newValue: string) => void;
}

export interface FormInputState {
    value: string;
}

export default class FormInput extends React.Component<FormInputProps, FormInputState> {
    constructor(props: FormInputProps) {
        super(props);
        this.state = {
            value: props.initialValue,
        }
    }

    render() {
        return (
            <input 
                className="form__input"
                type="text"
                value={this.state.value ? this.state.value : ''}
                maxLength={30}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    this.setState({
                        value: event.target.value,
                    }, () => this.props.onChange(this.state.value));
                }}
            />
        );
    }
}
