package org.cb.cinverse_backend.service;

import lombok.RequiredArgsConstructor;
import org.cb.cinverse_backend.dto.request.AddMovieRequest;
import org.cb.cinverse_backend.dto.request.UpdateMovieRequest;
import org.cb.cinverse_backend.dto.response.MovieResponse;
import org.cb.cinverse_backend.entity.Movie;
import org.cb.cinverse_backend.enums.Genre;
import org.cb.cinverse_backend.mapper.MovieMapper;
import org.cb.cinverse_backend.repository.MovieRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MovieService {

    private final MovieRepository movieRepository;
    private final MovieMapper movieMapper;

    public MovieResponse addMovie(AddMovieRequest request) {

        // Convert request DTO → Entity
        Movie movie = movieMapper.toEntity(request);

        // Save entity into database
        Movie savedMovie = movieRepository.save(movie);

        // Convert Entity → Response DTO
        return movieMapper.toResponse(savedMovie);
    }

    public List<MovieResponse> getAllMovies() {

        List<Movie> movies = movieRepository.findAll();

        return movies.stream()
                .map(movieMapper::toResponse)
                .toList();
    }

    public MovieResponse getMovieById(Long id) {

        Movie movie = movieRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Movie not found with id: " + id));

        return movieMapper.toResponse(movie);
    }

    public MovieResponse updateMovie(Long id, UpdateMovieRequest request) {

        Movie movie = movieRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Movie not found with id: " + id));

        movie.setTitle(request.getTitle());
        movie.setDescription(request.getDescription());
        movie.setGenre(request.getGenre());
        movie.setDurationMinutes(request.getDurationMinutes());
        movie.setRating(request.getRating());
        movie.setPosterUrl(request.getPosterUrl());
        movie.setDirector(request.getDirector());
        movie.setCastMembers(request.getCastMembers());
        movie.setReleaseDate(request.getReleaseDate());

        Movie updatedMovie = movieRepository.save(movie);

        return movieMapper.toResponse(updatedMovie);
    }

    public void deleteMovie(Long id) {

        Movie movie = movieRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Movie not found with id: " + id));

        movieRepository.delete(movie);
    }

    public List<MovieResponse> searchMovies(String title) {

        List<Movie> movies = movieRepository.findByTitleContainingIgnoreCase(title);

        return movies.stream()
                .map(movieMapper::toResponse)
                .toList();
    }

    public List<MovieResponse> filterMovies(Genre genre) {

        List<Movie> movies = movieRepository.findByGenre(genre);

        return movies.stream()
                .map(movieMapper::toResponse)
                .toList();
    }
}