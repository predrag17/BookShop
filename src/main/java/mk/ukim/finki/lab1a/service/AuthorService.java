package mk.ukim.finki.lab1a.service;

import mk.ukim.finki.lab1a.model.Author;
import mk.ukim.finki.lab1a.model.Dto.AuthorDto;

import java.util.List;

public interface AuthorService {
    List<Author> listAll();

    Author findById(Long id);

    List<Author> findByIds(List<Long> ids);

    Author addAuthor(AuthorDto authorDto);

    Author delete(Long id);


    Author updateAuthor(Long id, AuthorDto authorDto);
}
