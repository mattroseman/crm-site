import * as React from 'react';
import FormButton from './FormButton';

export interface FormButtonsProps {
    hasAddButton?: boolean;
    hasDeleteButton?: boolean;
    onAddButtonClick?: () => void;
    onDeleteButtonClick?: () => void;
}

export default class FormButtons extends React.Component<FormButtonsProps, undefined> {
    render() {
        let buttons: JSX.Element[] = [];
        if (this.props.hasAddButton) {
            buttons.push(
                <FormButton key={0} isAddButton onClick={this.props.onAddButtonClick} />
            );
        }
        if (this.props.hasDeleteButton) {
            buttons.push(
                <FormButton key={1} isDeleteButton onClick={this.props.onDeleteButtonClick} />
            );
        }
        return (
            <div className="form__buttons">
                {buttons}
            </div>
        );
    }
}
