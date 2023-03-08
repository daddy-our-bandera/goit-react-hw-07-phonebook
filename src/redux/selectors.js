import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts;

export const getFilter = state => state.filter;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    const filterContacts = contacts.items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    const sortContacts = filterContacts.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    return sortContacts;
  }
);
