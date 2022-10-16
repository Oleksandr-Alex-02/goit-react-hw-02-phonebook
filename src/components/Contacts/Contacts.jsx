import React from 'react';
import PropTypes from 'prop-types';
import css from './Contacts.module.css'

const Contacts = ({ contactsList, remoteContact }) => (
    <ul className={css.contacts__list}>
        {contactsList.map(({ id, name, number }) => (
            <li className={css.contacts__item} key={id}>
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