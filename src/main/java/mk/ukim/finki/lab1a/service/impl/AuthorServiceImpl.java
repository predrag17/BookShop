package mk.ukim.finki.lab1a.service.impl;

import mk.ukim.finki.lab1a.model.Author;
import mk.ukim.finki.lab1a.model.Dto.AuthorDto;
import mk.ukim.finki.lab1a.model.exceptions.InvalidAuthorIdException;
import mk.ukim.finki.lab1a.repository.AuthorRepository;
import mk.ukim.finki.lab1a.service.AuthorService;
import mk.ukim.finki.lab1a.service.CountryService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AuthorServiceImpl implements AuthorService {

    private final AuthorRepository authorRepository;
    private final CountryService countryService;

    public AuthorServiceImpl(AuthorRepository authorRepository, CountryService countryService) {
        this.authorRepository = authorRepository;
        this.countryService = countryService;
    }

    @Override
    public List<Author> listAll() {
        return authorRepository.findAll();
    }

    @Override
    public Author findById(Long id) {
        return authorRepository.findById(id).orElseThrow(InvalidAuthorIdException::new);
    }

    @Override
    public List<Author> findByIds(List<Long> ids) {
        return authorRepository.findAllById(ids);
    }

    @Override
    public Author addAuthor(AuthorDto authorDto) {
        return authorRepository.save(new Author(
                authorDto.getName(),
                authorDto.getSurname(),
                countryService.findById(authorDto.getCountryId())
        ));
    }

    @Override
    public Author delete(Long id) {
        Author author = findById(id);
        authorRepository.delete(author);

        return author;
    }

    @Override
    public Author updateAuthor(Long id, AuthorDto authorDto) {
        Author author = findById(id);

        author.setName(authorDto.getName());
        author.setSurname(authorDto.getSurname());
        author.setCountry(countryService.findById(authorDto.getCountryId()));

        return authorRepository.save(author);
    }
}
