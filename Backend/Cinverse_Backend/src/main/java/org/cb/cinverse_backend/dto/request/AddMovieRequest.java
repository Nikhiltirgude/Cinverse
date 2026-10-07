package org.cb.cinverse_backend.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import org.cb.cinverse_backend.enums.Genre;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AddMovieRequest {

    @NotBlank(message = "Movie title is required")
    private String title;

    private String description;

    @NotNull(message = "Genre is required")
    private Genre genre;

    private Integer durationMinutes;

    private BigDecimal rating;

    private String posterUrl;

    private String director;

    private String castMembers;

    private LocalDate releaseDate;
}