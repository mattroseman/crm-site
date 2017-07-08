import * as React from 'react';
import { PlusSquare, XSquare } from '../icons';

export interface FormButtonProps {
    isAddButton?: boolean;
    isDeleteButton?: boolean;
    onClick: () => void;
}

export default class FormButton extends React.Component<FormButtonProps, undefined> {
    render() {
        let buttonIcon: JSX.Element;
        if (this.props.isAddButton) {
            buttonIcon = <PlusSquare />
        } else if (this.props.isDeleteButton) {
            buttonIcon = <XSquare />
        }

        return (
            <div className="form__button">
            <button
                className="form__button"
                type="button"
                onClick={this.props.onClick}
            >
                {buttonIcon}
            </button>
            </div>
        );
    }
}
