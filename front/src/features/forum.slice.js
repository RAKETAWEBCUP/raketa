import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPosts = createAsyncThunk('forum/fetchPosts', async () => {
  const response = await axios.get('http://localhost:8080/forum/get');
  return response.data;
});

const forumSlice = createSlice({
  name: 'forum',
  initialState: {
    posts: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })  },
});
export const gettAllMessage = (state) => state.forum.posts;
export const forumActions = {
    fetchPosts,
  };

export default forumSlice.reducer;
