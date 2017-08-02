import * as React from 'react';

import FormElementLabel from './FormElementLabel';
import FormElementFields from './FormElementFields';
import FormElementField from './FormElementField';

export interface FormElementProps {
    name: string;
    label: string;
    initialValue: any;
    isDateField?: boolean;
    allowPastDates?: boolean;
    allowFutureDates?: boolean;
    hasMultipleFields?: boolean;
    hasPrimaryIdentifier?: boolean;
    initialPrimaryIndex?: number;
    onChange: (name: string, value: any, primaryIndex?: number) => void;
    isMultiline?: boolean;
}

export interface FormElementState {
}

export default class FormElement extends React.Component<FormElementProps, FormElementState> {
    constructor(props: FormElementProps) {
        super(props);
    }

    render() {
        let formElements: JSX.Element;
        if (this.props.hasMultipleFields) {
            formElements = (
                <FormElementFields
                    name={this.props.name}
                    initialValues={this.props.initialValue}
                    isMultiline={this.props.isMultiline}
                    hasPrimaryIdentifier={this.props.hasPrimaryIdentifier}
                    initialPrimaryIndex={this.props.initialPrimaryIndex}
                    onChange={this.props.onChange}
                />
            );
        } else {
            formElements = (
                <div className="form__element-fields">
                    <FormElementField
                        initialValue={this.props.initialValue}
                        uuid={this.props.name}
                        isDateField={this.props.isDateField}
                        allowPastDates={this.props.allowPastDates}
                        allowFutureDates={this.props.allowFutureDates}
                        isMultiline={this.props.isMultiline}
                        onInputChange={this.props.onChange}
                    />
                </div>
            );
        }

        return (
            <div className="form__element">
                <FormElementLabel value={this.props.label} />
                {formElements}
            </div>
        );
    }
}
