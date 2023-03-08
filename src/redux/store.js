import { configureStore } from '@reduxjs/toolkit';

import { contactsReducers } from './contactsSlice';
import { filtersReducer } from './filterSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducers,
    filter: filtersReducer,
  },
});

export default store;
