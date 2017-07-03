import * as React from 'react';
import * as moment from 'moment';
import { SingleDatePicker } from 'react-dates';
//import 'react-dates/lib/css/_datepicker.css';

export interface DateFieldProps {
    label: string;
    handleChange: (value: Date) => void;
}

export interface DateFieldState {
    value: moment.Moment;
    focused: boolean;
}

export default class DateField extends React.Component<DateFieldProps, DateFieldState> {
    constructor(props: DateFieldProps) {
        super(props);
        this.state = { value: moment(), focused: false, };
    }

    render() {
        return (
            <div className="add-contact-label-field">
                <label className="add-contact-label">{this.props.label}</label>
                <div className="add-contact-field">
                    <SingleDatePicker
                        id={this.props.label}
                        numberOfMonths={1}
                        showDefaultInputIcon
                        showClearDate
                        hideKeyboardShortcutsPanel
                        isOutsideRange={() => {return false;}}
                        date={null}
                        onDateChange={(date) => {
                            this.setState({
                                value: date,
                            }, () => {this.props.handleChange(this.state.value.toDate())});
                        }}
                        focused={this.state.focused}
                        onFocusChange={({ focused }) => this.setState({ focused })}
                    />
                </div>
            </div>
        );
    }
}
