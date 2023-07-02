const { getAllBooks, getBook } = require("../service/book");

const getBooks = async (req, res) => {
    try {
        const resp = await getAllBooks();
        res.status(200).send(resp);
    } catch (error) {
        res.status(400).send("Unexpected error occured");
    }
}

const getBookById = async (req, res) => {
    try {
        const id = req.params.id;
        const resp = await getBook(id);
        res.status(200).send(resp);
    } catch (error) {
        res.status(400).send("Unexpected error occured");
    }
}


module.exports = { getBooks, getBookById };