import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await axios.get('/contacts');
      return contacts.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async ({ userName, number }, { rejectWithValue }) => {
    const contact = {
      name: userName,
      number,
    };
    try {
      const contacts = await axios.post('/contacts', contact);
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const removeContacts = createAsyncThunk(
  'contacts/removeContacts',
  async (id, { rejectWithValue }) => {
    try {
      const contacts = await axios.delete(`/contacts/${id}`);
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateContacts = createAsyncThunk(
  'contacts/updateContacts',
  async (contact, { rejectWithValue }) => {
    try {
      const contacts = await axios.patch(
        `/contacts/${contact.id}`,
        contact.body
      );
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
