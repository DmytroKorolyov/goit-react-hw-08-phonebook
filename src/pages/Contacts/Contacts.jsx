import ContactsMain from '../../components/ContactsMain';
import React from 'react';
import s from './Contacts.module.css'

const Contacts = () => {
    return (
        <div className={s.wrapperContacts}>
            <ContactsMain />
        </div>
    );
}

export default Contacts;
