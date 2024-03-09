package org.iesbelen.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDate;

@Data
@AllArgsConstructor
public class ProjectDTO {
    private long id;
    private String name;
    private String description;
    private LocalDate startDate;
    private LocalDate endDate;
    private long customerId;
    private long companyId;

}
