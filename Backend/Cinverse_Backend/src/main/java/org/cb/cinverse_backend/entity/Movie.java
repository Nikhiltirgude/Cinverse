package org.cb.cinverse_backend.entity;

import jakarta.persistence.*;
import lombok.*;
import org.cb.cinverse_backend.enums.Genre;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;


@Entity
@Table(name = "movies")
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Genre genre;

    private Integer durationMinutes;

    @Column(precision = 2, scale = 1)
    private BigDecimal rating;

    private String posterUrl;

    private String director;

    @Column(columnDefinition = "TEXT")
    private String castMembers;

    private LocalDate releaseDate;

    // One Movie can have many Shows
    @OneToMany(mappedBy = "movie",cascade = CascadeType.ALL)
    private List<Show> shows = new ArrayList<>();
}