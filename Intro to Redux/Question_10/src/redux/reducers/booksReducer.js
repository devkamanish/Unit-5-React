const initialState = [
  { id: 1, title: "Atomic Habits", author: "James Clear", genre: "Self-help", read: false },
  { id: 2, title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy", read: true }
];

export const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return [...state, { ...action.payload, id: Date.now(), read: false }];
    case "TOGGLE_READ":
      return state.map(book =>
        book.id === action.payload ? { ...book, read: !book.read } : book
      );
    case "EDIT_BOOK":
      return state.map(book =>
        book.id === action.payload.id ? { ...book, ...action.payload.updates } : book
      );
    case "DELETE_BOOK":
      return state.filter(book => book.id !== action.payload);
    default:
      return state;
  }
};
