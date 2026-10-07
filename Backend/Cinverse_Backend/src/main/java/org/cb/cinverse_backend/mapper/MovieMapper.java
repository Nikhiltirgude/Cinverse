package org.cb.cinverse_backend.mapper;

import org.cb.cinverse_backend.dto.request.AddMovieRequest;
import org.cb.cinverse_backend.dto.response.MovieResponse;
import org.cb.cinverse_backend.entity.Movie;
import org.springframework.stereotype.Component;

@Component
public class MovieMapper {

    public Movie toEntity(AddMovieRequest request) {

        return Movie.builder()
                .title(request.getTitle())
                .description(request.getDescription())
                .genre(request.getGenre())
                .durationMinutes(request.getDurationMinutes())
                .rating(request.getRating())
                .posterUrl(request.getPosterUrl())
                .director(request.getDirector())
                .castMembers(request.getCastMembers())
                .releaseDate(request.getReleaseDate())
                .build();
    }

    public MovieResponse toResponse(Movie movie) {

        return MovieResponse.builder()
                .id(movie.getId())
                .title(movie.getTitle())
                .description(movie.getDescription())
                .genre(movie.getGenre())
                .durationMinutes(movie.getDurationMinutes())
                .rating(movie.getRating())
                .posterUrl(movie.getPosterUrl())
                .director(movie.getDirector())
                .castMembers(movie.getCastMembers())
                .releaseDate(movie.getReleaseDate())
                .build();
    }
}