import React from 'react';
import PropTypes from 'prop-types';

const Contacts = ({ contactsList, remoteContact }) => (
    <ul>
        {contactsList.map(({ id, name, number }) => (
            <li key={id}>
                <p>
                    {name}: {number}
                </p>
                <button
                    type="button"
                    onClick={() => remoteContact(id)}
                >
                    Delete
                </button>
            </li>
        ))}
    </ul>
);

Contacts.propTypes = {
    contactsList: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    )
}

export default Contacts;