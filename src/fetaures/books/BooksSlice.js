const { createSlice } = require("@reduxjs/toolkit");

const initialsBook = {
  books: [
    { id: 1, title: "I Love Bangladesh", Author: "Hridoy" },
    { id: 2, title: "I Love Pakistan", Author: "Hridoy" },
  ],
};

export const bookSlice = createSlice({
  name: "books",
  initialState: initialsBook,
  reducers: {
    showBooks: (state) => state,
  },
});

export const { showBooks } = bookSlice.actions;
export default bookSlice.reducer;
