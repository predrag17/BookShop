package mk.ukim.finki.lab1a.model.Dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import mk.ukim.finki.lab1a.model.enumeration.Category;

import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@AllArgsConstructor
public class BookDto {

    private String name;
    private Category category;
    private List<Long> authorIds;
    private Integer availableCopies;
}
