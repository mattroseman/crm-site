import * as React from 'react';
import * as _ from 'lodash';

import { PlusSquare } from '../icons';
import { XSquare } from '../icons';

// import MdAdd from 'react-icons/md/add';
// import MdRemove from 'react-icons/md/remove';

export interface StringArrayFieldProps {
    label: string;
    handleChange: (value: string[]) => void;
    isMultiline?: boolean;
}

export interface StringArrayFieldState {
    values: string[];
    uuids: string[];
}

export default class StringArrayField extends React.Component<StringArrayFieldProps, StringArrayFieldState> {
    constructor(props: StringArrayFieldProps) {
        super(props);
        this.state = {
            values: [''],
            uuids: [_.uniqueId(this.props.label)],
        };

        this.handleArrayFieldElementChange = this.handleArrayFieldElementChange.bind(this);
        this.handleAddButtonPress = this.handleAddButtonPress.bind(this);
        this.handleDeleteButtonPress = this.handleDeleteButtonPress.bind(this);
    }

    handleArrayFieldElementChange(uuid: string, newValue: string) {
        this.setState({
            values: this.state.values.map((value: string, index: number) => {
                return this.state.uuids[index] == uuid ? newValue : value;
            }),
        });
    }

    handleAddButtonPress(uuid: string) {
        this.setState({
            values: [''].concat(this.state.values),
            uuids: [_.uniqueId(this.props.label)].concat(this.state.uuids),
        });
    }

    handleDeleteButtonPress(uuid: string) {
        let index = this.state.uuids.findIndex((elementUUID: string) => {
            return elementUUID == uuid;
        });
        let newValues = this.state.values;
        newValues.splice(index, 1);
        let newUUIDs = this.state.uuids;
        newUUIDs.splice(index, 1);
        this.setState({
            values: newValues,
            uuids: newUUIDs,
        });
    }

    render() {
        return (
            <div className="add-contact-label-field">
                <label className="add-contact-label">{this.props.label}</label>
                <div className="add-contact-array-fields">
                    {
                        this.state.values.map((value: string, index: number) => {
                            return (
                                <StringArrayFieldElement 
                                    key={this.state.uuids[index]}
                                    uuid={this.state.uuids[index]}
                                    initValue={value} 
                                    firstElement={index == 0} 
                                    includeDeleteButton={this.state.values.length > 1}
                                    handleChange={this.handleArrayFieldElementChange}
                                    handleAddButton={this.handleAddButtonPress}
                                    handleDeleteButton={this.handleDeleteButtonPress}
                                    isMultiline={this.props.isMultiline ? true : false}
                                />
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

interface StringArrayFieldElementProps {
    uuid: string;
    initValue: string;
    firstElement: boolean;
    includeDeleteButton: boolean;
    handleChange: (uuid: string, newValue: string) => void;
    handleAddButton: (uuid: string) => void;
    handleDeleteButton: (uuid: string) => void;
    isMultiline: boolean;
}

interface StringArrayFieldElementState {
    value: string;
}

class StringArrayFieldElement extends React.Component<StringArrayFieldElementProps, StringArrayFieldElementState> {
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
                    rows={3}
                    onChange={this.handleTextAreaChange}
                />
            );
        } else {
            InputField = (
                <input
                    className="add-contact-field add-contact-array-field"
                    type="text"
                    maxLength={30}
                    onChange={this.handleInputChange}
                />
            );
        }

        //TODO add icons for the buttons
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
