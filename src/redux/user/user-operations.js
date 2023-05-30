import { createAsyncThunk } from '@reduxjs/toolkit';
import { connections } from 'services';

export const fetchContacts = createAsyncThunk(
  'user/signUp',
  async (_, { rejectWithValue }) => {
    try {
      const user = await connections.signUp();
      return console.log(user);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
