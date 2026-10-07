package org.cb.cinverse_backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.cb.cinverse_backend.enums.BookingStatus;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "booking_tickets")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BookingTicket {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String bookingId;

    @Column(nullable = false)
    private LocalDateTime bookingTime;

    @Column(nullable = false)
    private Double totalAmount;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private BookingStatus bookingStatus;

    // Many BookingTickets belong to one User
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    // Many BookingTickets belong to one Show
    @ManyToOne
    @JoinColumn(name = "show_id", nullable = false)
    private Show show;

    // One BookingTicket can contain multiple ShowSeats
    @ManyToMany
    @JoinTable(
            name = "booking_ticket_seats",
            joinColumns = @JoinColumn(name = "booking_ticket_id"),
            inverseJoinColumns = @JoinColumn(name = "show_seat_id")
    )
    private List<ShowSeat> showSeats = new ArrayList<>();

    // One BookingTicket has one Payment
    @OneToOne(mappedBy = "bookingTicket")
    private Payment payment;
}