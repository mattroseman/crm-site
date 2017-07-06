import * as React from 'react';
import Contact from '../types/Contact';
import Header from './Header';
import ContactManagement from './ContactManagement';

export interface CRMSiteProps {
    initialContacts: Contact[];
}

export default class CRMSite extends React.Component<CRMSiteProps, undefined> {
    render() {
        return (
            <div className="crm-site">
                <Header />
                <ContactManagement initialContacts={this.props.initialContacts} />
            </div>
        );
    }
}
