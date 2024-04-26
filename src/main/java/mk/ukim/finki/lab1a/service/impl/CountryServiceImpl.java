package mk.ukim.finki.lab1a.service.impl;

import mk.ukim.finki.lab1a.model.Country;
import mk.ukim.finki.lab1a.model.Dto.CountryDto;
import mk.ukim.finki.lab1a.model.exceptions.InvalidCountryIdException;
import mk.ukim.finki.lab1a.repository.CountryRepository;
import mk.ukim.finki.lab1a.service.CountryService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryServiceImpl implements CountryService {

    private final CountryRepository countryRepository;

    public CountryServiceImpl(CountryRepository countryRepository) {
        this.countryRepository = countryRepository;
    }

    @Override
    public List<Country> listAll() {
        return countryRepository.findAll();
    }

    @Override
    public Country findById(Long id) {
        return countryRepository.findById(id).orElseThrow(InvalidCountryIdException::new);
    }

    @Override
    public Country addCountry(CountryDto countryDto) {
        return countryRepository.save(new Country(countryDto.getName(), countryDto.getContinent()));
    }

    @Override
    public Country update(Long id, CountryDto countryDto) {
        Country country = findById(id);

        country.setName(countryDto.getName());
        country.setContinent(countryDto.getContinent());

        return countryRepository.save(country);
    }

    @Override
    public Country delete(Long id) {
        Country country = findById(id);

        countryRepository.delete(country);

        return country;
    }

}
