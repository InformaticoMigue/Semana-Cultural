package org.iesbelen.service.company;

import java.util.List;
import java.util.Optional;

import org.iesbelen.model.Company;
import org.iesbelen.repository.company.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CompanyServiceImpl implements CompanyService{

    @Autowired
    CompanyRepository companyRepository;

    @Override
    public List<Company> getAll() {
        return (List<Company>) this.companyRepository.findAll();
    }

    @Override
    public Optional<Company> find(long id) {
        return this.companyRepository.findById(id);
    }

    @Override
    public Company update(Company company) {
        return this.companyRepository.save(company);
    }

    @Override
    public boolean delete(long id) {

        try {
            Optional<Company> company = companyRepository.findById(id);
            this.companyRepository.delete(company.get());
            return true;    
        } catch (Exception e) {
            return false;
        }
    }

}
