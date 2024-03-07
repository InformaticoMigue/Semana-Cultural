package org.iesbelen.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.iesbelen.model.Company;
import org.iesbelen.model.Project;

import java.util.List;

@Data
@AllArgsConstructor
public class CustomerDTO {
    private long id;
    private String name;
    private List<ProjectDTO> projects;
    private long companyId;

}
