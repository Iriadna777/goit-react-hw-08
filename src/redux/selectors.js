import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from './contacts/selectors';
import { selectNameFilter } from './filters/selectors';

// import { selectNameFilter } from './filters/slice';

// export const selectContacts = state => state.contacts.items;
// export const selectNameFilter = state => state.filters.name;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
