import * as React from 'react';
import * as _ from 'lodash';

export interface StringArrayFieldProps {
    label: string;
    handleChange: (value: string[]) => void;
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
        // TODO remove this element with uuid
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
                                    handleChange={this.handleArrayFieldElementChange}
                                    handleButton={index ? this.handleDeleteButtonPress : this.handleAddButtonPress}
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
    handleChange: (uuid: string, newValue: string) => void;
    handleButton: (uuid: string) => void;
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
    }

    render() {
        return (
            <div key={this.props.uuid} className="add-contact-array-field-element">
                <input
                    className="add-contact-field add-contact-array-field"
                    type="text"
                    onChange={(event) => {
                        this.setState({
                            value: event.target.value,
                        }, () => this.props.handleChange(this.props.uuid, this.state.value));
                    }}
                />
                <button
                    className="add-contact-array-field-button"
                    type="button"
                    onClick={() => this.props.handleButton(this.props.uuid)}
                >
                {this.props.firstElement ? '+' : 'x'}
                </button>
            </div>
        );
    }
}
