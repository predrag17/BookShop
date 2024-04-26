package mk.ukim.finki.lab1a.controller;

import mk.ukim.finki.lab1a.model.Country;
import mk.ukim.finki.lab1a.model.Dto.CountryDto;
import mk.ukim.finki.lab1a.service.CountryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/countries")
public class CountryController {

    private final CountryService countryService;

    public CountryController(CountryService countryService) {
        this.countryService = countryService;
    }

    @GetMapping
    public List<Country> listAllCountries() {
        List<Country> countries = countryService.listAll();
        System.out.println(countries);
        return countries;
    }

    @GetMapping("/{id}/details")
    public ResponseEntity<Country> getCountryById(@PathVariable Long id) {
        Country country = countryService.findById(id);
        System.out.println(country.getName() + " " + country.getContinent());
        return ResponseEntity.ok(country);
    }

    @PostMapping("/add")
    public ResponseEntity<Country> add(@RequestBody CountryDto countryDto) {
        Country country = countryService.addCountry(countryDto);

        return ResponseEntity.ok(country);
    }

    @PutMapping("/{id}/edit")
    public ResponseEntity<Country> edit(@PathVariable Long id, @RequestBody CountryDto countryDto) {
        Country country = countryService.update(id, countryDto);
        return ResponseEntity.ok(country);
    }

    @DeleteMapping("{id}/delete")
    public ResponseEntity<Country> delete(@PathVariable Long id) {
        return ResponseEntity.ok(countryService.delete(id));
    }
}
