import Book from "../../models/Book.js";

export const bookResolver = {
  Query: {
    hello: (_, { name }) => {
      return `Hello ${name}`;
    },
    books: async () => await Book.find({}),
  },
  Mutation: {
    create: async (_, { title, year }, context) => {
      const newBook = new Book({ title, year });
      await newBook.save();
      return newBook;
    },
    delete: async (_, { id }) => {
      const result = await Book.findByIdAndDelete({ _id: id });
      if (result.acknowledged && result.deletedCout === 1) {
        return result;
      }
    },
  },
};
