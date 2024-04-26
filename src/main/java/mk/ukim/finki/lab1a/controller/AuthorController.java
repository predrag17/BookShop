package mk.ukim.finki.lab1a.controller;

import mk.ukim.finki.lab1a.model.Author;
import mk.ukim.finki.lab1a.model.Dto.AuthorDto;
import mk.ukim.finki.lab1a.service.AuthorService;
import mk.ukim.finki.lab1a.service.CountryService;
import org.apache.coyote.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/authors")
public class AuthorController {

    private final AuthorService authorService;

    public AuthorController(AuthorService authorService) {
        this.authorService = authorService;
    }

    @GetMapping
    public ResponseEntity<List<Author>> listAll() {
        return ResponseEntity.ok(authorService.listAll());
    }

    @PostMapping
    public ResponseEntity<Author> add(@RequestBody AuthorDto authorDto) {
        return ResponseEntity.ok(authorService.addAuthor(authorDto));
    }

    @DeleteMapping("/{id}/delete")
    public ResponseEntity<Author> deleteAuthor(@PathVariable Long id) {
        return ResponseEntity.ok(authorService.delete(id));

    }

    @GetMapping("/{id}/details")
    public ResponseEntity<Author> getAuthorById(@PathVariable Long id) {
        return ResponseEntity.ok(authorService.findById(id));
    }

    @PutMapping("/{id}/edit")
    public ResponseEntity<Author> updateAuthor(@PathVariable Long id,
                                               @RequestBody AuthorDto authorDto) {
        return ResponseEntity.ok(authorService.updateAuthor(id, authorDto));
    }
}
