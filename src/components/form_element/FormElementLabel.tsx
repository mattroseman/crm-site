import * as React from 'react';

export interface FormLabelProps {
    value: string;
}

export default class FormLabel extends React.Component<FormLabelProps, undefined> {
    render() {
        return (
            <div className="form__element-label">
                <label>{this.props.value}</label>
            </div>
        );
    }
}
