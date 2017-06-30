// import * as React from 'react';
// import { SingleDatePicker } from 'react-dates';
// import 'react-dates/lib/css/_datepicker.css';
// 
// import 'react-datepicker/dist/react-datepicker.css';
// 
// export interface DateFieldProps {
//     label: string;
//     handleChange: (value: Date) => void;
// }
// 
// export interface DateFieldState {
//     value: moment;
// }
// 
// export default class DateField extends React.Component<DateFieldProps, DateFieldState> {
//     constructor(props: DateFieldProps) {
//         super(props);
//         this.state = { value: moment(), };
//     }
// 
//     render() {
//         return (
//             <div className="add-contact-label-field">
//                 <label className="add-contact-label">{this.props.label}</label>
//                 <SingleDatePicker
//                     date={null}
//                     selected={this.state.value}
//                     onDateChange={(date) => {
//                         this.setState({
//                             value: date,
//                         }, () => {this.props.handleChange(this.state.value.toDate())});
//                     }}
//                 />
//             </div>
//         );
//     }
// }
