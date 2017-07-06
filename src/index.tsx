import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './index.scss';
import CRMSite from './components/CRMSite';

let testContactList = [
    {
        firstName: 'Matthew',
        lastName: 'Roseman',
        email: ['mroseman95@gmail.com'],
        primaryEmail: 0,
        company: ['Stohio'],
        primaryCompany: 0,
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        email: ['john@doe.com'],
        primaryEmail: 0,
        company: ['Google'],
        primaryCompany: 0,
    },
    {
        firstName: 'Peter',
        lastName: 'Dinklage',
        email: ['foo@bar.com'],
        primaryEmail: 0,
        company: ['Microsoft'],
        primaryCompany: 0,
    },
];

ReactDOM.render(
    <CRMSite initialContacts={testContactList} />,
    document.getElementById("root")
);
