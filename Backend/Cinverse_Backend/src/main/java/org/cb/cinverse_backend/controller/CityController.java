package org.cb.cinverse_backend.controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.cb.cinverse_backend.dto.request.AddCityRequest;
import org.cb.cinverse_backend.dto.request.UpdateCityRequest;
import org.cb.cinverse_backend.dto.response.CityResponse;
import org.cb.cinverse_backend.service.CityService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cities")
@RequiredArgsConstructor
public class CityController {

    private final CityService cityService;

    @PostMapping
    public ResponseEntity<CityResponse> addCity(
            @Valid @RequestBody AddCityRequest request) {

        CityResponse response = cityService.addCity(request);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(response);
    }

    @GetMapping
    public ResponseEntity<List<CityResponse>> getAllCities() {

        List<CityResponse> response = cityService.getAllCities();

        return ResponseEntity.ok(response);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CityResponse> getCityById(
            @PathVariable Long id) {

        CityResponse response = cityService.getCityById(id);

        return ResponseEntity.ok(response);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CityResponse> updateCity(
            @PathVariable Long id,
            @Valid @RequestBody UpdateCityRequest request) {

        CityResponse response = cityService.updateCity(id, request);

        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCity(
            @PathVariable Long id) {

        cityService.deleteCity(id);

        return ResponseEntity.noContent().build();
    }
}