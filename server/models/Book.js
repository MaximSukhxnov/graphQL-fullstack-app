import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
  title: { type: String },
  year: { type: String },
});

const Book = mongoose.model("Book", BookSchema);

export default Book;
