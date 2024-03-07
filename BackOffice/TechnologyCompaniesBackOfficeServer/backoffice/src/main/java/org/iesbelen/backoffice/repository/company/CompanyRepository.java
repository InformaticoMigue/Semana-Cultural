package org.iesbelen.backoffice.repository.company;

import org.iesbelen.backoffice.model.Company;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompanyRepository extends CrudRepository<Company,Long>{
}
