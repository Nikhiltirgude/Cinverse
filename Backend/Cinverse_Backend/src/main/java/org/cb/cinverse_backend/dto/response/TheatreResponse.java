package org.cb.cinverse_backend.dto.response;

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
public class TheatreResponse {

    private Long id;
    private String name;
    private String address;

    private Long cityId;
    private String cityName;
}