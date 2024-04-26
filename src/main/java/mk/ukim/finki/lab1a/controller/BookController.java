package mk.ukim.finki.lab1a.controller;

import mk.ukim.finki.lab1a.model.Book;
import mk.ukim.finki.lab1a.model.Dto.BookDto;
import mk.ukim.finki.lab1a.model.Dto.CategoryDto;
import mk.ukim.finki.lab1a.model.enumeration.Category;
import mk.ukim.finki.lab1a.service.AuthorService;
import mk.ukim.finki.lab1a.service.BookService;
import org.apache.coyote.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/books")
public class BookController {

    private final BookService bookService;

    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping
    public ResponseEntity<List<Book>> listAll() {
        return ResponseEntity.ok(bookService.listAll());
    }

    @GetMapping("/{id}/details")
    public ResponseEntity<Book> getBookById(@PathVariable Long id) {
        return ResponseEntity.ok(bookService.findById(id));
    }

    @PostMapping("/add")
    public ResponseEntity<Book> add(@RequestBody BookDto bookDto) {
        return ResponseEntity.ok(bookService.saveBook(bookDto));
    }

    @DeleteMapping("/{id}/delete")
    public ResponseEntity<Book> delete(@PathVariable Long id) {
        return ResponseEntity.ok(bookService.delete(id));
    }


    @PutMapping("/{id}/edit")
    public ResponseEntity<Book> update(@PathVariable("id") Long id,
                                       @RequestBody BookDto bookDto) {
        return ResponseEntity.ok(bookService.update(id, bookDto));
    }

    @PostMapping("/{id}/rent")
    public ResponseEntity<Book> rentBook(@PathVariable Long id) {
        return ResponseEntity.ok(bookService.rent(id));
    }

    @GetMapping("/categories")
    public ResponseEntity<List<CategoryDto>> getCategories() {
        List<CategoryDto> categories = Arrays.stream(Category.values())
                .map(category -> new CategoryDto(category.name()))
                .collect(Collectors.toList());
        return ResponseEntity.ok(categories);
    }
}
