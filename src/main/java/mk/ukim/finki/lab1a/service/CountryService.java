package mk.ukim.finki.lab1a.service;

import mk.ukim.finki.lab1a.model.Country;
import mk.ukim.finki.lab1a.model.Dto.CountryDto;

import java.util.List;

public interface CountryService {
    List<Country> listAll();

    Country findById(Long id);

    Country addCountry(CountryDto countryDto);

    Country update(Long id, CountryDto countryDto);

    Country delete(Long id);
}
