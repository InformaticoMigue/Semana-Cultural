package org.iesbelen.repository.solution;


import org.iesbelen.model.Solution;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SolutionRepository extends CrudRepository<Solution,Long>{    
}
