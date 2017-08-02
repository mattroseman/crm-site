import * as React from 'react';
import { Building, Person } from '../icons';

export interface HeaderProps {
    onNewContact: () => void;
    onNewCompany: () => void;
}

export default class Header extends React.Component<HeaderProps, undefined> {
    render() {
        return (
            <div className="header">
                <div className="header__left-side pointer">
                    <div className="header__add-new-contact" onClick={this.props.onNewContact}>
                        <text className="header__add-new-button-text">New Contact</text>
                        <Person />
                    </div>
                    <div className="header__add-new-company pointer" onClick={this.props.onNewCompany}>
                        <text className="header__add-new-button-text">New Company</text> 
                        <Building />
                    </div>
                </div>
                <div className="header__center pointer">
                    <div className="header__title">
                        Go Go CRM
                    </div>
                </div>
                <div className="header__right-side">
                    <div className="header__sign-up pointer">
                        Sign-Up
                    </div>
                    <div className="header__log-in pointer">
                        Log-In
                    </div>
                </div>
            </div>
        );
    }
}
