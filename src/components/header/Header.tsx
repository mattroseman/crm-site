import * as React from 'react';

export default class Header extends React.Component<undefined, undefined> {
    render() {
        return (
            <div className="header">
                <div className="header-left-side">
                    <div className="header-title">
                        Go Go CRM
                    </div>
                </div>
                <div className="header-right-side">
                    <div className="header-sign-up">
                        Sign-Up
                    </div>
                    <div className="header-log-in">
                        Log-In
                    </div>
                </div>
            </div>
        );
    }
}
