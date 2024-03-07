package org.iesbelen.service.solution;

import java.util.List;
import java.util.Optional;

import org.iesbelen.model.Solution;

public interface SolutionService {
    List<Solution> getAll();
    Optional<Solution> find(long id);
    Solution update(Solution solution);
    boolean delete(long id);
}
