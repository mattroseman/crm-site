import * as React from 'react';

export interface StringArrayFieldProps {
    label: string
    handleChange: (value: string[]) => void;
}

export interface StringArrayFieldState {
    value: string[];
}

export default class StringArrayField extends React.Component<StringArrayFieldProps, StringArrayFieldState> {
    constructor(props: StringArrayFieldProps) {
        super(props);
        this.state = {
            value: [''],
        };

        this.handleArrayFieldElementChange = this.handleArrayFieldElementChange.bind(this);
    }

    handleArrayFieldElementChange(index: number, value: string) {
        let newState = this.state;
        newState.value[index] = value;
        this.setState(newState);
    }

    // TODO figure out adding and deleting array field elements
    render() {
        const stringArrayFieldList = this.state.value.map((value: string, index: number) => {
            return (
                <div key={index} className="add-contact-array-field-element">
                    <StringArrayFieldElement 
                        arrayIndex={index} 
                        handleChange={this.handleArrayFieldElementChange} 
                    />
                    <button 
                        className="add-contact-array-field-button" 
                        type="button"
                        onClick={() => {
                            let newState = this.state;
                            newState.value.push('');
                            this.setState(newState);
                        }}
                    >
                        {index ? 'x' : '+'}
                    </button>
                </div>
            );
        });

        return (
            <div className="add-contact-label-field">
                <label className="add-contact-label">{this.props.label}</label>
                <div className="add-contact-array-fields">{stringArrayFieldList}</div>
            </div>
        );
    }
}

interface StringArrayFieldElementProps {
    arrayIndex: number;
    handleChange: (index: number, value: string) => void;
}

interface StringArrayFieldElementState {
    value: string;
}

class StringArrayFieldElement extends React.Component<StringArrayFieldElementProps, StringArrayFieldElementState> {
    constructor(props: StringArrayFieldElementProps) {
        super(props);
        this.state = {
            value: '',
        };
    }

    render() {
        return (
            <input
                className="add-contact-field add-contact-array-field"
                type="text"
                onChange={(event) => {
                    this.setState({
                        value: event.target.value,
                    }, () => this.props.handleChange(this.props.arrayIndex, this.state.value));
                }}
            />
        );
    }
}
