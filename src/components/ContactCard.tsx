import * as React from 'react';

export interface ContactCardProps {
    firstName: string;
    lastName: string;
    email: string;
    company: string;
}

export default function ContactCard(props: ContactCardProps) {
    return (
        <div className="contact-card">
            <div className="contact-card-info">
                {props.firstName} {props.lastName}<br/>
                {props.email}<br/>
                {props.company}
            </div>
            <div className="contact-card-status">
            </div>
        </div>
    );
}
