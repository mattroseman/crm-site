import * as React from 'react';

export interface ContactCardProps {
    firstName: string;
    lastName: string;
}

export default function ContactCard(props: ContactCardProps) {
    return (
        <li className="contact-card">Contact: {props.firstName} {props.lastName}</li>
    );
}
