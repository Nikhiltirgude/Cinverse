package org.cb.cinverse_backend.service;

import lombok.RequiredArgsConstructor;
import org.cb.cinverse_backend.dto.request.AddTheatreRequest;
import org.cb.cinverse_backend.dto.response.TheatreResponse;
import org.cb.cinverse_backend.entity.City;
import org.cb.cinverse_backend.entity.Theatre;
import org.cb.cinverse_backend.mapper.TheatreMapper;
import org.cb.cinverse_backend.repository.CityRepository;
import org.cb.cinverse_backend.repository.TheatreRepository;
import org.springframework.stereotype.Service;
import org.cb.cinverse_backend.dto.request.UpdateTheatreRequest;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TheatreService {

    private final TheatreRepository theatreRepository;
    private final CityRepository cityRepository;
    private final TheatreMapper theatreMapper;

    public TheatreResponse addTheatre(AddTheatreRequest request) {

        City city = cityRepository.findById(request.getCityId())
                .orElseThrow(() ->
                        new RuntimeException(
                                "City not found with id: " + request.getCityId()));

        Theatre theatre = theatreMapper.toEntity(request);

        theatre.setCity(city);

        Theatre savedTheatre = theatreRepository.save(theatre);

        return theatreMapper.toResponse(savedTheatre);
    }

    public List<TheatreResponse> getAllTheatres() {

        List<Theatre> theatres = theatreRepository.findAll();

        return theatres.stream()
                .map(theatreMapper::toResponse)
                .toList();
    }

    public TheatreResponse getTheatreById(Long id) {

        Theatre theatre = theatreRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Theatre not found with id: " + id));

        return theatreMapper.toResponse(theatre);
    }

    public TheatreResponse updateTheatre(
            Long id,
            UpdateTheatreRequest request) {

        Theatre theatre = theatreRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Theatre not found with id: " + id));

        City city = cityRepository.findById(request.getCityId())
                .orElseThrow(() ->
                        new RuntimeException(
                                "City not found with id: " + request.getCityId()));

        theatre.setName(request.getName());
        theatre.setAddress(request.getAddress());

        // Maintain City → Theatre relationship
        theatre.setCity(city);

        Theatre updatedTheatre = theatreRepository.save(theatre);

        return theatreMapper.toResponse(updatedTheatre);
    }

    public void deleteTheatre(Long id) {

        Theatre theatre = theatreRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Theatre not found with id: " + id));

        theatreRepository.delete(theatre);
    }
}