import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import ContactManagement from './components/ContactManagement';

let testContactList = [
    {
        firstName: 'Matthew',
        lastName: 'Roseman',
    },
    {
        firstName: 'John',
        lastName: 'Doe',
    },
    {
        firstName: 'Peter',
        lastName: 'Dinklage',
    },
];

ReactDOM.render(
    <ContactManagement initialContacts={testContactList} />,
    document.getElementById("root")
);
