package mk.ukim.finki.lab1a.service;

import mk.ukim.finki.lab1a.model.Book;
import mk.ukim.finki.lab1a.model.Dto.BookDto;
import mk.ukim.finki.lab1a.model.enumeration.Category;

import java.util.List;

public interface BookService {
    List<Book> listAll();

    Book findById(Long id);

    Book saveBook(BookDto bookDto);

    Book delete(Long id);

    Book update(Long id, BookDto bookDto);

    Book rent(Long id);

}
