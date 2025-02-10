import mongoose from "mongoose";
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  author:{
    type: String,
    required: true,
  },
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
  publisher:{
    type: String,
    required: true,
  }
  // publisher_id: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "publisher",
  //   required: true,
  // }
});

// const publisherSchema = new Schema({
//   publisher: {
//     type: String,
//     required: true,
//   },
// });

// const Publisher = mongoose.model("publisher", publisherSchema);
const Book = mongoose.model("book", bookSchema);
export default Book ;
