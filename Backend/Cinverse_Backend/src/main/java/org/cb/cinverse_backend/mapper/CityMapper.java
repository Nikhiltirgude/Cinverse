package org.cb.cinverse_backend.mapper;

import org.cb.cinverse_backend.dto.request.AddCityRequest;
import org.cb.cinverse_backend.dto.response.CityResponse;
import org.cb.cinverse_backend.entity.City;
import org.springframework.stereotype.Component;

@Component
public class CityMapper {

    public City toEntity(AddCityRequest request) {

        return City.builder()
                .name(request.getName())
                .state(request.getState())
                .build();
    }

    public CityResponse toResponse(City city) {

        return CityResponse.builder()
                .id(city.getId())
                .name(city.getName())
                .state(city.getState())
                .build();
    }
}