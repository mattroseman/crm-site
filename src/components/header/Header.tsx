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
                <div className="header__left-side">
                    <div className="header__add-new-contact" onClick={this.props.onNewContact}>
                        New Contact <Person />
                    </div>
                    <div className="header__add-new-company" onClick={this.props.onNewCompany}>
                        New Company <Building />
                    </div>
                </div>
                <div className="header__center">
                    <div className="header__title">
                        Go Go CRM
                    </div>
                </div>
                <div className="header__right-side">
                    <div className="header__sign-up">
                        Sign-Up
                    </div>
                    <div className="header__log-in">
                        Log-In
                    </div>
                </div>
            </div>
        );
    }
}
