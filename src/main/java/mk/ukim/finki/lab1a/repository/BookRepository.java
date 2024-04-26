package mk.ukim.finki.lab1a.repository;

import mk.ukim.finki.lab1a.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
}
