package org.cb.cinverse_backend.dto.response;

import lombok.*;
import org.cb.cinverse_backend.enums.Genre;

import java.math.BigDecimal;
import java.time.LocalDate;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MovieResponse {

    private Long id;

    private String title;

    private String description;

    private Genre genre;

    private Integer durationMinutes;

    private BigDecimal rating;

    private String posterUrl;

    private String director;

    private String castMembers;

    private LocalDate releaseDate;
}