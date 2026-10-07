package org.cb.cinverse_backend.dto.request;

import jakarta.validation.constraints.NotBlank;
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
public class UpdateCityRequest {

    @NotBlank(message = "City name is required")
    private String name;

    @NotBlank(message = "State is required")
    private String state;
}