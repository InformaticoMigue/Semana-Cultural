package org.iesbelen.service.company;

import java.util.List;
import java.util.Optional;

import org.iesbelen.model.Company;

public interface CompanyService {
    List<Company> getAll();
    Optional<Company> find(long id);
    Company update(Company company);
    boolean delete(long id);
}
