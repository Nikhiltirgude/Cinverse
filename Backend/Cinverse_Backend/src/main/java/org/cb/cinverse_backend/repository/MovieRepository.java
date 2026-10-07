package org.cb.cinverse_backend.repository;

import org.cb.cinverse_backend.entity.Movie;
import org.cb.cinverse_backend.enums.Genre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {

    List<Movie> findByTitleContainingIgnoreCase(String title);
    List<Movie> findByGenre(Genre genre);
}