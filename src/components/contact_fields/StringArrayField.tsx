import * as React from 'react';
import * as _ from 'lodash';

import { PlusSquare, XSquare, Star, FilledStar } from '../icons';

export interface StringArrayFieldProps {
    name: string;
    label: string;
    initialValue: string[];
    initialPrimaryIndex: number;
    handleChange: (name: string, value: string[], primaryIndex: number) => void;
    isMultiline?: boolean;
}

export interface StringArrayFieldState {
    values: string[];
    uuids: string[];
    primaryUUID: string;
}

export default class StringArrayField extends React.Component<StringArrayFieldProps, StringArrayFieldState> {
    constructor(props: StringArrayFieldProps) {
        super(props);
        let initialUUIDs = props.initialValue.map(() => {
            return _.uniqueId(this.props.label);
        });
        this.state = {
            values: props.initialValue,
            uuids: initialUUIDs,
            primaryUUID: initialUUIDs[props.initialPrimaryIndex],
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
        }, () => {
            this.props.handleChange(this.props.name, 
                this.state.values, 
                this.state.uuids.indexOf(this.state.primaryUUID));
        });
    }

    handleAddButtonPress(uuid: string) {
        this.setState({
            values: this.state.values.concat(['']),
            uuids: this.state.uuids.concat([_.uniqueId(this.props.label)]),
        }, () => {
            this.props.handleChange(this.props.name, 
                this.state.values,
                this.state.uuids.indexOf(this.state.primaryUUID));
        });
    }

    handleDeleteButtonPress(uuid: string) {
        let index = this.state.uuids.indexOf(uuid);
        let newValues = this.state.values;
        newValues.splice(index, 1);
        let newUUIDs = this.state.uuids;
        newUUIDs.splice(index, 1);
        // If the primary UUID is deleted, reset index 0 as primary
        this.setState({
            values: newValues,
            uuids: newUUIDs,
            primaryUUID: uuid == this.state.primaryUUID ? newUUIDs[0] : this.state.primaryUUID,
        }, () => {
            this.props.handleChange(this.props.name,
                this.state.values,
                this.state.uuids.indexOf(this.state.primaryUUID));
        });
    }

    handleStarIconPress(uuid: string) {
        // If this uuid is the current primary uuid, then reset the primary uuid to index 0
        // otherwise set this uuid as the main one
        this.setState({
            primaryUUID: this.state.primaryUUID == uuid ? this.state.uuids[0] : uuid,
        }, () => {
            this.props.handleChange(this.props.name,
                this.state.values,
                this.state.uuids.indexOf(this.state.primaryUUID));
        });
    }

    render() {
        return (
            <div className="add-contact-label-field">
                <div className="add-contact-label add-contact-label-stars">
                    <div className="add-contact-string-array-label">
                        <label>{this.props.label}</label>
                    </div>
                    <div className="add-contact-stars">
                        {
                            this.state.uuids.map((uuid: string, index: number) => {
                                if (uuid == this.state.primaryUUID) {
                                    return (
                                        <div
                                            key={uuid}
                                            className="add-contact-star"
                                            onClick={() => {
                                                this.handleStarIconPress(uuid)
                                            }}
                                        >
                                            <FilledStar />
                                        </div>
                                    );
                                } else {
                                    return (
                                        <div
                                            key={uuid}
                                            className="add-contact-star"
                                            onClick={() => {
                                                this.handleStarIconPress(uuid)
                                            }}
                                        >
                                            <Star />
                                        </div>
                                    );
                                }
                            })
                        }
                    </div>
                </div>
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
