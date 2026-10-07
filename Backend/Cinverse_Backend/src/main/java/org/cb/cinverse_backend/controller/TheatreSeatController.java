package org.cb.cinverse_backend.controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.cb.cinverse_backend.dto.request.AddTheatreSeatRequest;
import org.cb.cinverse_backend.dto.request.UpdateTheatreSeatRequest;
import org.cb.cinverse_backend.dto.response.TheatreSeatResponse;
import org.cb.cinverse_backend.service.TheatreSeatService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/theatre-seats")
@RequiredArgsConstructor
public class TheatreSeatController {

    private final TheatreSeatService theatreSeatService;

    @PostMapping
    public ResponseEntity<TheatreSeatResponse> addTheatreSeat(
            @Valid @RequestBody AddTheatreSeatRequest request) {

        TheatreSeatResponse response =
                theatreSeatService.addTheatreSeat(request);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(response);
    }

    @GetMapping
    public ResponseEntity<List<TheatreSeatResponse>> getAllTheatreSeats() {

        List<TheatreSeatResponse> response =
                theatreSeatService.getAllTheatreSeats();

        return ResponseEntity.ok(response);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TheatreSeatResponse> getTheatreSeatById(
            @PathVariable Long id) {

        TheatreSeatResponse response =
                theatreSeatService.getTheatreSeatById(id);

        return ResponseEntity.ok(response);
    }

    @PutMapping("/{id}")
    public ResponseEntity<TheatreSeatResponse> updateTheatreSeat(
            @PathVariable Long id,
            @Valid @RequestBody UpdateTheatreSeatRequest request) {

        TheatreSeatResponse response =
                theatreSeatService.updateTheatreSeat(id, request);

        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTheatreSeat(
            @PathVariable Long id) {

        theatreSeatService.deleteTheatreSeat(id);

        return ResponseEntity.noContent().build();
    }
}