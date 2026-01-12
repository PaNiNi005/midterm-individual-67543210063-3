const bookRepository = require('../../data/repositories/bookRepository');
const bookValidator = require('../validators/bookValidator');

class BookService {
    async getAllBooks(status = null) {
        if (status) bookValidator.validateBookData({ status });
        const books = await bookRepository.findAll(status);
        const statistics = {
            total: books.length,
            available: books.filter(b => b.status === 'available').length,
            borrowed: books.filter(b => b.status === 'borrowed').length
        };
        return { books, statistics };
    }

    async getBookById(id) {
        const bookId = bookValidator.validateId(id);
        const book = await bookRepository.findById(bookId);
        if (!book) throw new Error('Book not found');
        return book;
    }

    async createBook(data) {
        bookValidator.validateBookData(data);
        bookValidator.validateISBN(data.isbn);
        return await bookRepository.create(data);
    }

    async updateBook(id, data) {
        const bookId = bookValidator.validateId(id);
        bookValidator.validateBookData(data);
        bookValidator.validateISBN(data.isbn);
        return await bookRepository.update(bookId, data);
    }

    async borrowBook(id) {
        const bookId = bookValidator.validateId(id);
        const book = await bookRepository.findById(bookId);
        if (!book) throw new Error('Book not found');
        if (book.status === 'borrowed') throw new Error('Book is already borrowed');
        return await bookRepository.updateStatus(bookId, 'borrowed');
    }

    async returnBook(id) {
        const bookId = bookValidator.validateId(id);
        const book = await bookRepository.findById(bookId);
        if (!book) throw new Error('Book not found');
        if (book.status !== 'borrowed') throw new Error('Book is not borrowed');
        return await bookRepository.updateStatus(bookId, 'available');
    }

    async deleteBook(id) {
        const bookId = bookValidator.validateId(id);
        const book = await bookRepository.findById(bookId);
        if (!book) throw new Error('Book not found');
        if (book.status === 'borrowed') throw new Error('Cannot delete borrowed book');
        return await bookRepository.delete(bookId);
    }
}

module.exports = new BookService();
