import * as React from 'react';

export default class AddContactForm extends React.Component<undefined, undefined> {
    render() {
        return (
            <form className="add-contact-form">
                <div className="add-contact-label-field">
                    <label className="add-contact-label">First Name:</label>
                    <input className="add-contact-field" type="text" name="firstName" />
                </div>
                <div className="add-contact-label-field">
                    <label className="add-contact-label">Last Name:</label>
                    <input className="add-contact-field" type="text" name="lastName" />
                </div>
                <div className="add-contact-label-field">
                    <label className="add-contact-label">Email:</label>
                    <input className="add-contact-field" type="text" name="email" />
                </div>
                <div className="add-contact-label-field">
                    <label className="add-contact-label">Phone Number:</label>
                    <input className="add-contact-field" type="text" name="phone" />
                </div>
                <div className="add-contact-label-field">
                    <label className="add-contact-label">Birthday:</label>
                    <input className="add-contact-field" type="text" name="birthday" />
                </div>
                <div className="add-contact-label-field">
                    <label className="add-contact-label">Last Contacted:</label>
                    <input className="add-contact-field" type="text" name="lastContacted" />
                </div>
                <div className="add-contact-label-field">
                    <label className="add-contact-label">Notes:</label>
                    <input className="add-contact-field" type="text" name="notes" />
                </div>
                
                <input className="add-contact-submit" type="submit" value="Add Contact" />
            </form>
        );
    }
}
