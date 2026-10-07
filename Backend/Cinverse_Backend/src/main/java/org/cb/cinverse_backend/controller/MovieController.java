package org.cb.cinverse_backend.controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.cb.cinverse_backend.dto.request.AddMovieRequest;
import org.cb.cinverse_backend.dto.request.UpdateMovieRequest;
import org.cb.cinverse_backend.dto.response.MovieResponse;
import org.cb.cinverse_backend.enums.Genre;
import org.cb.cinverse_backend.service.MovieService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/movies")
@RequiredArgsConstructor
public class MovieController {

    private final MovieService movieService;

    @PostMapping
    public ResponseEntity<MovieResponse> addMovie(
            @Valid @RequestBody AddMovieRequest request) {

        MovieResponse response = movieService.addMovie(request);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(response);
    }

    @GetMapping
    public ResponseEntity<List<MovieResponse>> getAllMovies() {

        List<MovieResponse> response = movieService.getAllMovies();

        return ResponseEntity.ok(response);
    }

    @GetMapping("/search")
    public ResponseEntity<List<MovieResponse>> searchMovies(
            @RequestParam String title) {

        List<MovieResponse> response = movieService.searchMovies(title);

        return ResponseEntity.ok(response);
    }
    @GetMapping("/filter")
    public ResponseEntity<List<MovieResponse>> filterMovies(
            @RequestParam Genre genre) {

        List<MovieResponse> response = movieService.filterMovies(genre);

        return ResponseEntity.ok(response);
    }

    @GetMapping("/{id}")
    public ResponseEntity<MovieResponse> getMovieById(
            @PathVariable Long id) {

        MovieResponse response = movieService.getMovieById(id);

        return ResponseEntity.ok(response);
    }

    @PutMapping("/{id}")
    public ResponseEntity<MovieResponse> updateMovie(
            @PathVariable Long id,
            @Valid @RequestBody UpdateMovieRequest request) {

        MovieResponse response = movieService.updateMovie(id, request);

        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMovie(
            @PathVariable Long id) {

        movieService.deleteMovie(id);

        return ResponseEntity.noContent().build();
    }


}