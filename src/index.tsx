import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.scss';
import ContactManagement from './components/ContactManagement';

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
    <ContactManagement initialContacts={testContactList} />,
    document.getElementById("root")
);
