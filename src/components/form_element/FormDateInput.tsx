import * as React from 'react';
import * as moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export interface FormDateInputProps {
    initialValue?: Date;
    uuid: string;
    onChange: (newValue: Date) => void;
}

export interface FormDateInputState {
    value: moment.Moment;
    focused: boolean;
}

export default class FormDateInput extends React.Component<FormDateInputProps, FormDateInputState> {
    constructor(props: FormDateInputProps) {
        super(props);
        this.state = {
            value: props.initialValue ? moment(props.initialValue) : null,
            focused: false,
        }
    }

    render() {
        return (
            <div className="form__input--date">
                <SingleDatePicker
                    id={this.props.uuid}
                    numberOfMonths={1}
                    showDefaultInputIcon
                    showClearDate
                    date={this.state.value}
                    isOutsideRange={(date: moment.Moment) => { return date.isAfter(new Date(), 'day'); }}
                    hideKeyboardShortcutsPanel
                    onDateChange={(date) => {
                        this.setState({
                            value: date,
                        }, () => {this.props.onChange(this.state.value.toDate())});
                    }}
                    focused={this.state.focused}
                    onFocusChange={(arg: {focused: boolean}) => this.setState({ focused: arg.focused })}
                />
            </div>
        );
    }
}
