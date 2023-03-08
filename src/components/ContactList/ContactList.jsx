import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilteredContacts } from 'redux/selectors';
import { useEffect } from 'react';

import { fetchContacts } from 'redux/operations';
import { Item } from 'components/ContactListItem/ContactListItem';
import { Filter } from 'components/Filter/Filter';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const { error } = useSelector(getContacts);
  const filteredContacts = useSelector(getFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <Filter />
          <List>
            {filteredContacts.map(({ id, name, phone }) => (
              <Item key={id} id={id} name={name} number={phone} />
            ))}
          </List>
        </>
      )}
    </div>
  );
};
