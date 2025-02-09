import mongoose from "mongoose";
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  stock: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});
const Book = mongoose.model("Book", bookSchema);
export default Book;
