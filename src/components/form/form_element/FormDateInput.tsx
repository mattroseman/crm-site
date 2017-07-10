import * as React from 'react';
import * as moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export interface FormDateInputProps {
    initialDate?: Date;
    initialNote?: string;
    uuid: string;
    onChange: (newValue: { date: Date, note: string }) => void;
}

export interface FormDateInputState {
    date: moment.Moment;
    note: string;
    focused: boolean;
}

export default class FormDateInput extends React.Component<FormDateInputProps, FormDateInputState> {
    constructor(props: FormDateInputProps) {
        super(props);
        this.state = {
            date: props.initialDate ? moment(props.initialDate) : null,
            note: props.initialNote || '',
            focused: false,
        }
    }

    render() {
        return (
            <div className="form__input--date">
                <input
                    className="form__input--date-note"
                    type="text"
                    value={this.state.note || ''}
                    maxLength={40}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        this.setState({
                            note: event.target.value,
                        });
                    }}
                />
                <SingleDatePicker
                    id={this.props.uuid}
                    numberOfMonths={1}
                    showDefaultInputIcon
                    showClearDate
                    date={this.state.date}
                    isOutsideRange={(date: moment.Moment) => { return date.isAfter(new Date(), 'day'); }}
                    hideKeyboardShortcutsPanel
                    onDateChange={(date) => {
                        this.setState({
                            date: date,
                        }, () => {
                            this.props.onChange({ 
                                date: this.state.date.toDate(), 
                                note: this.state.note 
                            });
                        });
                    }}
                    anchorDirection="right"
                    focused={this.state.focused}
                    onFocusChange={(arg: {focused: boolean}) => this.setState({ focused: arg.focused })}
                />
            </div>
        );
    }
}
