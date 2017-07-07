import * as React from 'react';

import { PlusSquare, XSquare } from '../icons';

export interface StringArrayFieldElementProps {
    uuid: string;
    initValue: string;
    firstElement: boolean;
    includeDeleteButton: boolean;
    handleChange: (uuid: string, newValue: string) => void;
    handleAddButton: (uuid: string) => void;
    handleDeleteButton: (uuid: string) => void;
    isMultiline: boolean;
}

export interface StringArrayFieldElementState {
    value: string;
}

export default class StringArrayFieldElement extends React.Component<StringArrayFieldElementProps, StringArrayFieldElementState> {
    constructor(props: StringArrayFieldElementProps) {
        super(props);
        this.state = {
            value: props.initValue,
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
    }

    handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            value: event.target.value,
        }, () => this.props.handleChange(this.props.uuid, this.state.value));
    }

    handleTextAreaChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        this.setState({
            value: event.target.value,
        }, () => this.props.handleChange(this.props.uuid, this.state.value));
    }

    render() {
        let InputField: JSX.Element;
        if (this.props.isMultiline) {
            InputField = (
                <textarea
                    className="add-contact-field add-contact-array-field muliline-array-field"
                    type="text"
                    value={this.state.value}
                    rows={3}
                    onChange={this.handleTextAreaChange}
                />
            );
        } else {
            InputField = (
                <input
                    className="add-contact-field add-contact-array-field"
                    type="text"
                    value={this.state.value}
                    maxLength={30}
                    onChange={this.handleInputChange}
                />
            );
        }

        let Buttons: JSX.Element;
        if (this.props.firstElement) {
            if (this.props.includeDeleteButton) {
                Buttons = (
                    <div className="add-contact-array-field-buttons">
                        <button
                            className="add-contact-array-field-button"
                            type="button"
                            onClick={() => this.props.handleAddButton(this.props.uuid)}
                        >
                        	<PlusSquare />
                        </button>
                        <button
                            className="add-contact-array-field-button"
                            type="button"
                            onClick={() => this.props.handleDeleteButton(this.props.uuid)}
                        >
                            <XSquare />
                        </button>
                    </div>
                );
            } else {
                Buttons = (
                    <div className="add-contact-array-field-buttons">
                        <button
                            className="add-contact-array-field-button"
                            type="button"
                            onClick={() => this.props.handleAddButton(this.props.uuid)}
                        >
                            <PlusSquare />
                        </button>
                    </div>
                );
            }
        } else {
            Buttons = (
                <div className="add-contact-array-field-buttons">
                    <button
                        className="add-contact-array-field-button"
                        type="button"
                        onClick={() => this.props.handleDeleteButton(this.props.uuid)}
                    >
                        <XSquare />
                    </button>
                </div>
            );
        }

        return (
            <div key={this.props.uuid} className="add-contact-array-field-element">
                {InputField}
                {Buttons}
            </div>
        );
    }
}
