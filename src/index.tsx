import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './index.scss';
import CRMSite from './components/CRMSite';

let testContactList = [
    {
        firstName: 'Matthew',
        lastName: 'Roseman',
        email: ['mroseman95@gmail.com'],
        company: ['Stohio'],
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        email: ['john@doe.com'],
        company: ['Google'],
    },
    {
        firstName: 'Peter',
        lastName: 'Dinklage',
        email: ['foo@bar.com'],
        company: ['Microsoft'],
    },
];

ReactDOM.render(
    <CRMSite initialContacts={testContactList} />,
    document.getElementById("root")
);
