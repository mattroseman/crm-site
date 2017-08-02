import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as _ from 'lodash';

import './index.scss';
import CRMSite from './components/CRMSite';

let testContactList = [
    {
        uuid: _.uniqueId(),
        firstName: 'Matthew',
        lastName: 'Roseman',
        email: ['mroseman95@gmail.com'],
        primaryEmail: 0,
        company: ['Stohio'],
        primaryCompany: 0,
    },
    {
        uuid: _.uniqueId(),
        firstName: 'John',
        lastName: 'Doe',
        email: ['john@doe.com'],
        primaryEmail: 0,
        company: ['Google'],
        primaryCompany: 0,
    },
    {
        uuid: _.uniqueId(),
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
