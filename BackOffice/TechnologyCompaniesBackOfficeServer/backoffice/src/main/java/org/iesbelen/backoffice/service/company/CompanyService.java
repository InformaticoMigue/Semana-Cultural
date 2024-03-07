package org.iesbelen.backoffice.service.company;

import org.iesbelen.backoffice.model.Company;

import java.util.List;
import java.util.Optional;

public interface CompanyService {
    List<Company> getAll();
    Optional<Company> find(long id);
    Company update(Company company);
    boolean delete(long id);
}
