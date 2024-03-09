package org.iesbelen.mapper;

import org.iesbelen.dto.CustomerDTO;
import org.iesbelen.dto.ProjectDTO;
import org.iesbelen.model.Customer;
import org.iesbelen.model.Project;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface MapperCustomer {

    @Mapping(target = "companyId", source = "companyIdIn")
    @Mapping(target = "projects", source = "projectsIn")
    CustomerDTO toCustomerDTO(Customer customer, long companyIdIn, List<ProjectDTO> projectsIn);

}
