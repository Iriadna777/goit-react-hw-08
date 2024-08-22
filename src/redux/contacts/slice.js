import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
// import { createSelector } from '@reduxjs/toolkit';
// import { selectContacts } from './contactsSlice';
// import { selectNameFilter } from './filtersSlice';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
extraReducers: (builder) => {
  builder
    .addCase(fetchContacts.fulfilled, (state, action) => {
      state.items = action.payload;
    })
    .addCase(addContact.fulfilled, (state, action) => {
      console.log('Contact added successfully:', action.payload);
      state.items.push(action.payload);
    })
    .addCase(deleteContact.fulfilled, (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    })
    .addMatcher(
      action => 
        action.type.endsWith('/pending'),
      state => {
        state.isLoading = true;
        state.error = null;
      }
    )
    .addMatcher(
      action => 
        action.type.endsWith('/rejected'),
      (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }
    )
    .addMatcher(
      action => 
        action.type.endsWith('/fulfilled'),
      state => {
        state.isLoading = false;
      }
    );
},
});

export const contactsReducer = contactsSlice.reducer;

// export default contactsSlice.reducer;
// export const selectContacts = (state) => state.contacts.items;
// export const selectError = (state) => state.contacts.error;