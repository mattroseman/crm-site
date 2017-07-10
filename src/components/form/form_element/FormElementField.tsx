import * as React from 'react';
import { Star, FilledStar } from '../../icons';
import FormDateInput from './FormDateInput';
import FormInput from './FormInput';
import FormMultilineInput from './FormMultilineInput';
import FormButtons from './FormButtons';

export interface FormElementFieldProps {
    initialValue: any;
    uuid: string;
    isDateField?: boolean;
    isMultiline?: boolean;
    onInputChange: (uuid: string, newValue: any) => void;
    hasPrimaryIdentifier?: boolean;
    isPrimary?: boolean;
    onPrimaryChange?: (uuid: string) => void;
    canAddField?: boolean;
    canDeleteField?: boolean;
    onAddField?: (uuid: string) => void;
    onDeleteField?: (uuid: string) => void;
}

export interface FormElementFieldState {
    value: any;
}

export default class FormElementField extends React.Component<FormElementFieldProps, FormElementFieldState> {
    constructor(props: FormElementFieldProps) {
        super(props);
        this.state = {
            value: props.initialValue,
        };

        this.handlePrimaryStarToggle = this.handlePrimaryStarToggle.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handlePrimaryStarToggle() {
        if (this.props.hasPrimaryIdentifier) {
            this.props.onPrimaryChange(this.props.uuid);
        }
    }

    handleInputChange(newValue: any) {
        this.setState({
            value: newValue,
        }, () => {
            this.props.onInputChange(this.props.uuid, this.state.value);
        });
    }

    render() {
        let input: JSX.Element;
        if (this.props.isDateField) {
            input = <FormDateInput 
                initialDate={this.state.value ? this.state.value.date : null} 
                initialNote={this.state.value ? this.state.value.note : null}
                uuid={this.props.uuid} 
                onChange={this.handleInputChange} 
            />
        } else if (this.props.isMultiline) {
            input = <FormMultilineInput initialValue={this.state.value} onChange={this.handleInputChange}/>
        } else {
            input = <FormInput initialValue={this.state.value} onChange={this.handleInputChange}/>
        }

        let star: JSX.Element;
        // If there is no primary identifier then the star is nothing, but a div
        if (this.props.hasPrimaryIdentifier) {
            if (this.props.isPrimary) {
                star = <FilledStar />
            } else {
                star = <Star />
            }
        }

        return (
            <div className="form__element-field">
                <div className="form__star" onClick={this.handlePrimaryStarToggle}>
                    {star}
                </div>
                {input}
                <FormButtons
                    hasAddButton={this.props.canAddField}
                    hasDeleteButton={this.props.canDeleteField}
                    onAddButtonClick={() => {
                        this.props.onAddField(this.props.uuid);
                    }}
                    onDeleteButtonClick={() => {
                        this.props.onDeleteField(this.props.uuid);
                    }}
                />
            </div>
        );
    }
}
