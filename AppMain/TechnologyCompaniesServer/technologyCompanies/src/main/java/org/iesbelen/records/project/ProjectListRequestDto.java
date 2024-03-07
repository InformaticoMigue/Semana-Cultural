package org.iesbelen.records.project;

import org.iesbelen.dto.ProjectDTO;

import java.util.List;

public record ProjectListRequestDto(List<ProjectDTO> projects) {
}
