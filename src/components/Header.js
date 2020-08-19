import React from 'react'

function Header(props) {
    const { names } = props;
    const headers = names.map(name => <th scope='col'>{name}</th>);

    return (
        <thread>
            <tr>{headers}</tr>
        </thread>
    )
}

export default Header
