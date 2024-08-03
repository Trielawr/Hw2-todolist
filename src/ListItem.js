import React from 'react';

const ListItem = ({ elementTitle, children }) => (
    <li className="todo-list-item">
        <span>{ elementTitle }</span>
        { children }
    </li>
);

export default ListItem;
