const { Book } = require("../entity/model/book");
const json = require("../entity/sampledata.json");

const getAllBooks = async () => {
    const allBooks = await Book.findAll({attributes: ['id', 'title','price','discount','image']});
    return allBooks;
}

const getBook = async (id) => {
    const result = await Book.findByPk(id);
    return result;
}

const loadInitialData = async () => {
    try{
        json.forEach(async (item)=>{
            const {id, ...data}  = item;
            await Book.create({
                ...data
            });
        });
    }catch(error){
        console.log("Error : ",error)
    }
}

module.exports = { getAllBooks, getBook, loadInitialData }