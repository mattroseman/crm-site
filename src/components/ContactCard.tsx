import * as React from 'react';
import Contact from '../types/Contact';

export interface ContactCardProps {
    contact: Contact;
    onClick: (contact: Contact) => void;
}

export default class ContactCard extends React.Component<ContactCardProps, undefined> {
    render() {
        return (
            <div className="contact-card" onClick={() => {this.props.onClick(this.props.contact)}}>
                <div className="contact-card-info">
                    {this.props.contact.firstName} {this.props.contact.lastName}<br/>
                    {this.props.contact.email[0]}<br/>
                    {this.props.contact.company[0]}
                </div>
                <div className="contact-card-status">
                </div>
            </div>
        );
    }
}

// export default function ContactCard(props: ContactCardProps) {
//     return (
//         <div className="contact-card" onClick={() => {props.onClick(props.contact)}}>
//             <div className="contact-card-info">
//                 {props.contact.firstName} {props.contact.lastName}<br/>
//                 {props.contact.primaryEmail}<br/>
//                 {props.contact.primaryCompany}
//             </div>
//             <div className="contact-card-status">
//             </div>
//         </div>
//     );
// }
