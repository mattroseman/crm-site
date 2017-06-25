import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import FilterableContactCardList from './components/FilterableContactCardList';

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
    <FilterableContactCardList contacts={testContactList} />,
    document.getElementById("root")
);
