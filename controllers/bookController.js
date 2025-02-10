import Book from "../db/Models/BookModels.js";

export const getBooks = (req, res) => {
  Book.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

  export const getBook_id = (req, res) => {
    const id = req.params.id;
    Book.findById(id)
    .then((result) =>{res.send(result)})
    .catch((err) => {console.log(err)
    })
  };

export const createBook = (req, res) => {
  const book = new Book(req.body);
  book
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteBook = (req, res) => {
  const id = req.params.id;

  Book.findByIdAndDelete(id)
    .then((result) => {
      if (result) {
        res.status(200).send(`Book with ID ${id} has been deleted.`);
      } else {
        res.status(404).send(`Book with ID ${id} not found.`);
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
};
