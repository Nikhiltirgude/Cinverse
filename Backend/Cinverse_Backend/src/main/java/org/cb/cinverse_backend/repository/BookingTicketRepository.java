package org.cb.cinverse_backend.repository;

import org.cb.cinverse_backend.entity.BookingTicket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingTicketRepository extends JpaRepository<BookingTicket, Long> {

}