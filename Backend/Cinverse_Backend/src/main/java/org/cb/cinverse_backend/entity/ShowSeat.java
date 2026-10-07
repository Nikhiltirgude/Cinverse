package org.cb.cinverse_backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.cb.cinverse_backend.enums.SeatStatus;

@Entity
@Table(name = "show_seats")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ShowSeat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private SeatStatus seatStatus;

    // Many ShowSeats belong to one Show
    @ManyToOne
    @JoinColumn(name = "show_id", nullable = false)
    private Show show;

    // Many ShowSeats can refer to one TheatreSeat
    @ManyToOne
    @JoinColumn(name = "theatre_seat_id", nullable = false)
    private TheatreSeat theatreSeat;
}