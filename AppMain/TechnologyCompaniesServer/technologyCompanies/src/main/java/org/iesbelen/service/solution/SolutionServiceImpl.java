package org.iesbelen.service.solution;

import java.util.List;
import java.util.Optional;

import org.iesbelen.model.Solution;
import org.iesbelen.repository.solution.SolutionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SolutionServiceImpl implements SolutionService {

    @Autowired
    SolutionRepository solutionRepository;

    @Override
    public List<Solution> getAll() {
        return (List<Solution>) solutionRepository.findAll();
    }

    @Override
    public Optional<Solution> find(long id) {
        return this.solutionRepository.findById(id);
    }

    @Override
    public Solution update(Solution service) {
        return this.solutionRepository.save(service);
    }

    @Override
    public boolean delete(long id) {
        try {
            Optional<Solution> solution = solutionRepository.findById(id);
            this.solutionRepository.delete(solution.get());
            return true;
        } catch (Exception e) {
            return false;
        }
    }

}
