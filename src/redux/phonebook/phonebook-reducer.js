import { createSlice } from '@reduxjs/toolkit';
import {
  addContacts,
  fetchContacts,
  removeContacts,
  updateContacts,
} from './phonebook-operations';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder.addCase(fetchContacts.pending, (state, _) => {
      state.isLoading = true;
    });
    builder.addCase(fetchContacts.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.isLoading = false;
    });
    builder.addCase(fetchContacts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action;
    });
    builder.addCase(addContacts.pending, (state, _) => {
      state.isLoading = true;
    });
    builder.addCase(addContacts.fulfilled, (state, { payload }) => {
      state.data.push(payload.data);
      state.isLoading = false;
    });
    builder.addCase(addContacts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action;
    });
    builder.addCase(removeContacts.pending, (state, _) => {
      state.isLoading = true;
    });
    builder.addCase(removeContacts.fulfilled, (state, { payload }) => {
      state.data = state.data.filter(({ id }) => id !== payload.data.id);
      state.isLoading = false;
    });
    builder.addCase(removeContacts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action;
    });
    builder.addCase(updateContacts.pending, (state, _) => {
      state.isLoading = true;
    });
    builder.addCase(updateContacts.fulfilled, (state, { payload }) => {
      const index = state.data.findIndex(el => el.id === payload.data.id);
      state.data[index] = payload.data;
      state.isLoading = false;
    });
    builder.addCase(updateContacts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action;
    });
  },
});

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: { changeFilter: (_, action) => action.payload },
});

export const { changeFilter } = filterSlice.actions;
