package org.cb.cinverse_backend.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.cb.cinverse_backend.enums.SeatType;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TheatreSeatResponse {

    private Long id;
    private String seatNumber;
    private SeatType seatType;

    private Long theatreId;
    private String theatreName;
}