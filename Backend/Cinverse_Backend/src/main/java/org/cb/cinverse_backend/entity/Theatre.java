package org.cb.cinverse_backend.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "theatres")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Theatre {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String address;

    // Many Theatres belong to one City
    @ManyToOne
    @JoinColumn(name = "city_id", nullable = false)
    private City city;

    // One Theatre can have many TheatreSeats
    @OneToMany(mappedBy = "theatre",cascade = CascadeType.ALL)
    private List<TheatreSeat> theatreSeats = new ArrayList<>();

    // One Theatre can have many Shows
    @OneToMany(mappedBy = "theatre",cascade = CascadeType.ALL)
    private List<Show> shows = new ArrayList<>();
}