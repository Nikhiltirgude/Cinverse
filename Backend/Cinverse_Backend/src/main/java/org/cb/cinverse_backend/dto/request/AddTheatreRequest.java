package org.cb.cinverse_backend.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AddTheatreRequest {

    @NotBlank(message = "Theatre name is required")
    private String name;

    @NotBlank(message = "Theatre address is required")
    private String address;

    @NotNull(message = "City id is required")
    private Long cityId;
}