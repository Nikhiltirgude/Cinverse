package org.cb.cinverse_backend.controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.cb.cinverse_backend.dto.request.AddTheatreRequest;
import org.cb.cinverse_backend.dto.request.UpdateTheatreRequest;
import org.cb.cinverse_backend.dto.response.TheatreResponse;
import org.cb.cinverse_backend.service.TheatreService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/theatres")
@RequiredArgsConstructor
public class TheatreController {

    private final TheatreService theatreService;

    @PostMapping
    public ResponseEntity<TheatreResponse> addTheatre(
            @Valid @RequestBody AddTheatreRequest request) {

        TheatreResponse response = theatreService.addTheatre(request);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(response);
    }

    @GetMapping
    public ResponseEntity<List<TheatreResponse>> getAllTheatres() {

        List<TheatreResponse> response = theatreService.getAllTheatres();

        return ResponseEntity.ok(response);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TheatreResponse> getTheatreById(
            @PathVariable Long id) {

        TheatreResponse response = theatreService.getTheatreById(id);

        return ResponseEntity.ok(response);
    }

    @PutMapping("/{id}")
    public ResponseEntity<TheatreResponse> updateTheatre(
            @PathVariable Long id,
            @Valid @RequestBody UpdateTheatreRequest request) {

        TheatreResponse response =
                theatreService.updateTheatre(id, request);

        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTheatre(
            @PathVariable Long id) {

        theatreService.deleteTheatre(id);

        return ResponseEntity.noContent().build();
    }
}