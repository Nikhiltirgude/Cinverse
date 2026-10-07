package org.cb.cinverse_backend.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "cities")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class City {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String name;

    @Column(nullable = false)
    private String state;

    // One City can have many Theatres
    @OneToMany(mappedBy = "city",cascade = CascadeType.ALL)
    private List<Theatre> theatres = new ArrayList<>();
}