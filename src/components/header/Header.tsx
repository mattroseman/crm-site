import * as React from 'react';

export default class Header extends React.Component<undefined, undefined> {
    render() {
        return (
            <div className="header">
                <div className="header__left-side">
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
