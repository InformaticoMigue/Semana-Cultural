package org.iesbelen.service.project;

import org.iesbelen.model.Project;

import java.util.List;
import java.util.Optional;

public interface ProjectService {
    List<Project> getAll();
    Optional<Project> find(long id);
    Project update(Project project);
    boolean delete(long id);

}
