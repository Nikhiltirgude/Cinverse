package org.cb.cinverse_backend.service;

import lombok.RequiredArgsConstructor;
import org.cb.cinverse_backend.dto.request.AddTheatreSeatRequest;
import org.cb.cinverse_backend.dto.request.UpdateTheatreSeatRequest;
import org.cb.cinverse_backend.dto.response.TheatreSeatResponse;
import org.cb.cinverse_backend.entity.Theatre;
import org.cb.cinverse_backend.entity.TheatreSeat;
import org.cb.cinverse_backend.mapper.TheatreSeatMapper;
import org.cb.cinverse_backend.repository.TheatreRepository;
import org.cb.cinverse_backend.repository.TheatreSeatRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TheatreSeatService {

    private final TheatreSeatRepository theatreSeatRepository;
    private final TheatreRepository theatreRepository;
    private final TheatreSeatMapper theatreSeatMapper;

    public TheatreSeatResponse addTheatreSeat(
            AddTheatreSeatRequest request) {

        Theatre theatre = theatreRepository.findById(request.getTheatreId())
                .orElseThrow(() ->
                        new RuntimeException(
                                "Theatre not found with id: "
                                        + request.getTheatreId()));

        TheatreSeat theatreSeat =
                theatreSeatMapper.toEntity(request);

        theatreSeat.setTheatre(theatre);

        TheatreSeat savedTheatreSeat =
                theatreSeatRepository.save(theatreSeat);

        return theatreSeatMapper.toResponse(savedTheatreSeat);
    }

    public List<TheatreSeatResponse> getAllTheatreSeats() {

        List<TheatreSeat> theatreSeats =
                theatreSeatRepository.findAll();

        return theatreSeats.stream()
                .map(theatreSeatMapper::toResponse)
                .toList();
    }

    public TheatreSeatResponse getTheatreSeatById(Long id) {

        TheatreSeat theatreSeat =
                theatreSeatRepository.findById(id)
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Theatre seat not found with id: " + id));

        return theatreSeatMapper.toResponse(theatreSeat);
    }

    public TheatreSeatResponse updateTheatreSeat(
            Long id,
            UpdateTheatreSeatRequest request) {

        TheatreSeat theatreSeat =
                theatreSeatRepository.findById(id)
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Theatre seat not found with id: " + id));

        Theatre theatre =
                theatreRepository.findById(request.getTheatreId())
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Theatre not found with id: "
                                                + request.getTheatreId()));

        theatreSeat.setSeatNumber(request.getSeatNumber());
        theatreSeat.setSeatType(request.getSeatType());

        // Maintain Theatre → TheatreSeat relationship
        theatreSeat.setTheatre(theatre);

        TheatreSeat updatedTheatreSeat =
                theatreSeatRepository.save(theatreSeat);

        return theatreSeatMapper.toResponse(updatedTheatreSeat);
    }

    public void deleteTheatreSeat(Long id) {

        TheatreSeat theatreSeat =
                theatreSeatRepository.findById(id)
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Theatre seat not found with id: " + id));

        theatreSeatRepository.delete(theatreSeat);
    }
}