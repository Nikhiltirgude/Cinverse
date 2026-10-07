package org.cb.cinverse_backend.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
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
public class AddTheatreSeatRequest {

    @NotBlank(message = "Seat number is required")
    private String seatNumber;

    @NotNull(message = "Seat type is required")
    private SeatType seatType;

    @NotNull(message = "Theatre id is required")
    private Long theatreId;
}