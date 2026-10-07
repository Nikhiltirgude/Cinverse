package org.cb.cinverse_backend.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.cb.cinverse_backend.enums.Genre;

import java.math.BigDecimal;
import java.time.LocalDate;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UpdateMovieRequest {

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