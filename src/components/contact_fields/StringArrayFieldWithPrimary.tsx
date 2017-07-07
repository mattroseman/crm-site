import * as React from 'react';
import * as _ from 'lodash';

import StringArrayFieldElement from './StringArrayFieldElement';
import { Star, FilledStar } from '../icons';

export interface StringArrayFieldWithPrimaryProps {
    name: string;
    label: string;
    initialValue: string[];
    initialPrimaryIndex: number;
    handleChange: (name: string, value: string[], primaryIndex: number) => void;
    isMultiline?: boolean;
}

export interface StringArrayFieldWithPrimaryState {
    values: string[];
    uuids: string[];
    primaryUUID: string;
}

export default class StringArrayFieldWithPrimary extends React.Component<StringArrayFieldWithPrimaryProps, StringArrayFieldWithPrimaryState> {
    constructor(props: StringArrayFieldWithPrimaryProps) {
        super(props);
        let initialUUIDs = props.initialValue.map(() => {
            return _.uniqueId(this.props.label);
        });
        this.state = {
            values: props.initialValue,
            uuids: initialUUIDs,
            primaryUUID: initialUUIDs[props.initialPrimaryIndex],
        };

        this.handleStateChange = this.handleStateChange.bind(this);
        this.handleArrayFieldElementChange = this.handleArrayFieldElementChange.bind(this);
        this.handleAddButtonPress = this.handleAddButtonPress.bind(this);
        this.handleDeleteButtonPress = this.handleDeleteButtonPress.bind(this);
    }

    handleStateChange() {
        this.props.handleChange(this.props.name, this.state.values, this.state.uuids.indexOf(this.state.primaryUUID));
    }

    handleArrayFieldElementChange(uuid: string, newValue: string) {
        this.setState({
            values: this.state.values.map((value: string, index: number) => {
                return this.state.uuids[index] == uuid ? newValue : value;
            }),
        }, this.handleStateChange);
    }

    handleAddButtonPress(uuid: string) {
        this.setState({
            values: this.state.values.concat(['']),
            uuids: this.state.uuids.concat([_.uniqueId(this.props.label)]),
        }, this.handleStateChange);
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
        }, this.handleStateChange);
    }

    handleStarIconPress(uuid: string) {
        // If this uuid is the current primary uuid, then reset the primary uuid to index 0
        // otherwise set this uuid as the main one
        this.setState({
            primaryUUID: this.state.primaryUUID == uuid ? this.state.uuids[0] : uuid,
        }, this.handleStateChange);
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
