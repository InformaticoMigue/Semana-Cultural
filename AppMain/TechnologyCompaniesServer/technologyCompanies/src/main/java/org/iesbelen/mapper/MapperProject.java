package org.iesbelen.mapper;

import org.iesbelen.dto.ProjectDTO;
import org.iesbelen.model.Project;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface MapperProject {

    @Mapping(target = "customerId", source = "customerIdIn")
    @Mapping(target = "companyId", source = "companyIdIn")
    ProjectDTO toProjectDTO(Project project, long customerIdIn, long companyIdIn);

}
