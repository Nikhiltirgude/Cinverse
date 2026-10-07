package org.cb.cinverse_backend.mapper;

import org.cb.cinverse_backend.dto.request.AddTheatreRequest;
import org.cb.cinverse_backend.dto.response.TheatreResponse;
import org.cb.cinverse_backend.entity.Theatre;
import org.springframework.stereotype.Component;

@Component
public class TheatreMapper {

    public Theatre toEntity(AddTheatreRequest request) {

        return Theatre.builder()
                .name(request.getName())
                .address(request.getAddress())
                .build();
    }

    public TheatreResponse toResponse(Theatre theatre) {

        return TheatreResponse.builder()
                .id(theatre.getId())
                .name(theatre.getName())
                .address(theatre.getAddress())
                .cityId(theatre.getCity().getId())
                .cityName(theatre.getCity().getName())
                .build();
    }
}