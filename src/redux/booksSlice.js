import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/rhmG3xIkl2wiaVRuH0gq/books';

// Fetch books action
export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
});

// Add book action
export const addBook = createAsyncThunk('books/addBook', async (book) => {
  const response = await axios.post(BASE_URL, book);
  return response.data;
});

// Remove book action
export const removeBook = createAsyncThunk('books/removeBook', async (id) => {
  await axios.delete(`${BASE_URL}/${id}`);
  return id;
});

const booksSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.fulfilled, (state, action) => action.payload)
      .addCase(addBook.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(removeBook.fulfilled, (state, action) => state.filter(
        (book) => book.id !== action.payload,
      ));
  },
});

export default booksSlice.reducer;
