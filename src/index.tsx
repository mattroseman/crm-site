import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './index.scss';
import CRMSite from './components/CRMSite';

let testContactList = [
    {
        firstName: 'Matthew',
        lastName: 'Roseman',
        primaryEmail: 'mroseman95@gmail.com',
        primaryCompany: 'Stohio',
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        primaryEmail: 'john@doe.com',
        primaryCompany: 'Google',
    },
    {
        firstName: 'Peter',
        lastName: 'Dinklage',
        primaryEmail: 'foo@bar.com',
        primaryCompany: 'Microsoft',
    },
];

ReactDOM.render(
    <CRMSite initialContacts={testContactList} />,
    document.getElementById("root")
);
