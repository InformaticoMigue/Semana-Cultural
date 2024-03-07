package org.iesbelen.controller;

import org.iesbelen.records.project.ProjectListRequestDto;
import org.iesbelen.service.project.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.iesbelen.mapper.MapperProject;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("projects")
public class ProjectController {
    @Autowired
    ProjectService projectService;
    @Autowired
    MapperProject mapperProject;

    @GetMapping()
    @ResponseStatus(HttpStatus.OK)
    public ProjectListRequestDto list() {
        return new ProjectListRequestDto(this.projectService.getAll().stream()
                .map(project -> mapperProject.toProjectDTO(project,project.getCustomer().getId(),project.getCompany().getId())).toList());
    }
}
