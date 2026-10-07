package org.cb.cinverse_backend.repository;

import org.cb.cinverse_backend.entity.TheatreSeat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TheatreSeatRepository extends JpaRepository<TheatreSeat, Long> {

}