import * as React from 'react';
import * as _ from 'lodash';

import FormElementField from './FormElementField';

export interface FormElementFieldsProps {
    name: string;
    initialValues: string[];
    isMultiline?: boolean;
    hasPrimaryIdentifier?: boolean;
    initialPrimaryIndex: number;
    onChange: (name: string, value: string[], primaryIndex: number) => void;
}

export interface FormElementFieldsState {
    values: string[];
    uuids: string[];
    primaryUUID: string;
}

export default class FormElementFields extends React.Component<FormElementFieldsProps, FormElementFieldsState> {
    constructor(props: FormElementFieldsProps) {
        super(props);
        let initialUUIDs = props.initialValues.map(() => {
            return _.uniqueId();
        });
        this.state = {
            values: props.initialValues,
            uuids: initialUUIDs,
            primaryUUID: initialUUIDs[props.initialPrimaryIndex],
        };

        this.handleStateChange = this.handleStateChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handlePrimaryToggle = this.handlePrimaryToggle.bind(this);
        this.handleAddElementField = this.handleAddElementField.bind(this);
        this.handleDeleteElementField = this.handleDeleteElementField.bind(this);
    }

    handleStateChange() {
        this.props.onChange(this.props.name, this.state.values, this.state.uuids.indexOf(this.state.primaryUUID));
    }

    handleInputChange(uuid: string, newValue: string) {
        this.setState({
            values: this.state.values.map((value: string, index: number) => {
                return this.state.uuids[index] == uuid ? newValue : value;
            }),
        }, this.handleStateChange);
    }

    handlePrimaryToggle(uuid: string) {
        this.setState({
            primaryUUID: this.state.primaryUUID == uuid ? this.state.uuids[0] : uuid,
        }, this.handleStateChange);
    }

    handleAddElementField(uuid: string) {
        this.setState({
            values: this.state.values.concat(['']),
            uuids: this.state.uuids.concat([_.uniqueId()]),
        }, this.handleStateChange);
    }

    handleDeleteElementField(uuid: string) {
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

    render() {
        let fields = this.state.values.map((value: string, index: number) => {
            return (
                <FormElementField
                    initialValue={value}
                    key={this.state.uuids[index]}
                    uuid={this.state.uuids[index]}
                    isMultiline={this.props.isMultiline}
                    onInputChange={this.handleInputChange}
                    hasPrimaryIdentifier={this.props.hasPrimaryIdentifier}
                    isPrimary={this.state.uuids[index] == this.state.primaryUUID}
                    onPrimaryChange={this.handlePrimaryToggle}
                    canAddField={index == 0}
                    canDeleteField={this.state.values.length > 1}
                    onAddField={this.handleAddElementField}
                    onDeleteField={this.handleDeleteElementField}
                />
            );
        });

        return (
            <div className="form__element-fields">{fields}</div>
        );
    }
}
