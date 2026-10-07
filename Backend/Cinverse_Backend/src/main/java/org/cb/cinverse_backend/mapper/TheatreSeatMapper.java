package org.cb.cinverse_backend.mapper;

import org.cb.cinverse_backend.dto.request.AddTheatreSeatRequest;
import org.cb.cinverse_backend.dto.response.TheatreSeatResponse;
import org.cb.cinverse_backend.entity.TheatreSeat;
import org.springframework.stereotype.Component;

@Component
public class TheatreSeatMapper {

    public TheatreSeat toEntity(AddTheatreSeatRequest request) {

        return TheatreSeat.builder()
                .seatNumber(request.getSeatNumber())
                .seatType(request.getSeatType())
                .build();
    }

    public TheatreSeatResponse toResponse(TheatreSeat theatreSeat) {

        return TheatreSeatResponse.builder()
                .id(theatreSeat.getId())
                .seatNumber(theatreSeat.getSeatNumber())
                .seatType(theatreSeat.getSeatType())
                .theatreId(theatreSeat.getTheatre().getId())
                .theatreName(theatreSeat.getTheatre().getName())
                .build();
    }
}