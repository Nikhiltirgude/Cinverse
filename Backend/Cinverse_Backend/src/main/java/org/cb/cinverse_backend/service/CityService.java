package org.cb.cinverse_backend.service;

import lombok.RequiredArgsConstructor;
import org.cb.cinverse_backend.dto.request.AddCityRequest;
import org.cb.cinverse_backend.dto.request.UpdateCityRequest;
import org.cb.cinverse_backend.dto.response.CityResponse;
import org.cb.cinverse_backend.entity.City;
import org.cb.cinverse_backend.mapper.CityMapper;
import org.cb.cinverse_backend.repository.CityRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CityService {

    private final CityRepository cityRepository;
    private final CityMapper cityMapper;

    public CityResponse addCity(AddCityRequest request) {

        City city = cityMapper.toEntity(request);

        City savedCity = cityRepository.save(city);

        return cityMapper.toResponse(savedCity);
    }

    public List<CityResponse> getAllCities() {

        List<City> cities = cityRepository.findAll();

        return cities.stream()
                .map(cityMapper::toResponse)
                .toList();
    }

    public CityResponse getCityById(Long id) {

        City city = cityRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("City not found with id: " + id));

        return cityMapper.toResponse(city);
    }

    public CityResponse updateCity(Long id, UpdateCityRequest request) {

        City city = cityRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("City not found with id: " + id));

        city.setName(request.getName());
        city.setState(request.getState());

        City updatedCity = cityRepository.save(city);

        return cityMapper.toResponse(updatedCity);
    }

    public void deleteCity(Long id) {

        City city = cityRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("City not found with id: " + id));

        cityRepository.delete(city);
    }
}