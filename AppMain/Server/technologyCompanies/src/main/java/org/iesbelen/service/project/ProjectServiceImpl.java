package org.iesbelen.service.project;

import org.iesbelen.model.Company;
import org.iesbelen.model.Project;
import org.iesbelen.repository.project.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProjectServiceImpl implements ProjectService {
    @Autowired
    ProjectRepository projectRepository;

    @Override
    public List<Project> getAll() {
        return (List<Project>) projectRepository.findAll();
    }

    @Override
    public Optional<Project> find(long id) {
        return projectRepository.findById(id);
    }

    @Override
    public Project update(Project project) {
        return projectRepository.save(project);
    }

    @Override
    public boolean delete(long id) {
        try {
            Project project = find(id).get();
            this.projectRepository.delete(project);
            return true;
        }catch (Exception e) {
            return false;
        }
    }
}
