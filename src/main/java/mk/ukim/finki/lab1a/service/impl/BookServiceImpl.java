package mk.ukim.finki.lab1a.service.impl;

import mk.ukim.finki.lab1a.model.Book;
import mk.ukim.finki.lab1a.model.Dto.BookDto;
import mk.ukim.finki.lab1a.model.enumeration.Category;
import mk.ukim.finki.lab1a.model.exceptions.InvalidBookIdException;
import mk.ukim.finki.lab1a.repository.BookRepository;
import mk.ukim.finki.lab1a.service.AuthorService;
import mk.ukim.finki.lab1a.service.BookService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookServiceImpl implements BookService {

    private final BookRepository bookRepository;
    private final AuthorService authorService;

    public BookServiceImpl(BookRepository bookRepository, AuthorService authorService) {
        this.bookRepository = bookRepository;
        this.authorService = authorService;
    }

    @Override
    public List<Book> listAll() {
        return bookRepository.findAll();
    }

    @Override
    public Book findById(Long id) {
        return bookRepository.findById(id).orElseThrow(InvalidBookIdException::new);
    }

    @Override
    public Book saveBook(BookDto bookDto) {
        return bookRepository.save(new Book(
                bookDto.getName(),
                bookDto.getCategory(),
                authorService.findByIds(bookDto.getAuthorIds()),
                bookDto.getAvailableCopies()
        ));
    }

    @Override
    public Book delete(Long id) {
        Book book = findById(id);

        bookRepository.delete(book);

        return book;
    }

    @Override
    public Book update(Long id, BookDto bookDto) {
        Book book = findById(id);

        book.setName(bookDto.getName());
        book.setCategory(bookDto.getCategory());
        book.setAuthors(authorService.findByIds(bookDto.getAuthorIds()));
        book.setAvailableCopies(bookDto.getAvailableCopies());

        return bookRepository.save(book);
    }

    @Override
    public Book rent(Long id) {
        Book book = findById(id);

        book.setRented(!book.getRented());

        if (book.getRented()) {
            book.setAvailableCopies(book.getAvailableCopies() - 1);
        } else {
            book.setAvailableCopies(book.getAvailableCopies() + 1);
        }

        return bookRepository.save(book);
    }


}
