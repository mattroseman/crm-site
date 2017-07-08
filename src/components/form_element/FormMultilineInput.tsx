import * as React from 'react';

export interface FormMultilineInputProps {
    initialValue: string;
    onChange: (newValue: string) => void;
}

export interface FormMultilineInputState {
    value: string;
}

export default class FormMultilineInput extends React.Component<FormMultilineInputProps, FormMultilineInputState> {
    constructor(props: FormMultilineInputProps) {
        super(props);
        this.state = {
            value: props.initialValue,
        }
    }

    render() {
        return (
            <textarea
                className="form__input--multiline"
                type="text"
                value={this.state.value}
                rows={3}
                onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                    this.setState({
                        value: event.target.value,
                    }, () => this.props.onChange(this.state.value));
                }}
            />
        );
    }
}
