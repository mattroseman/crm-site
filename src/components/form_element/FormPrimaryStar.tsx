import * as React from 'react';
import { Star, FilledStar } from '../icons';

export interface FormPrimaryStarProps {
    filled: boolean;
    onClick: () => void;
}

export default class FormPrimaryStar extends React.Component<FormPrimaryStarProps, undefined> {
    render() {
        let star = this.props.filled ? <FilledStar /> : <Star />;
        return (
            <div className="form__star" onClick={this.props.onClick} >
            {star}
            </div>
        );
    }
}
