package org.iesbelen.controller;

import java.util.List;
import java.util.Optional;

import org.iesbelen.model.Company;
import org.iesbelen.records.company.CompanyListRequest;
import org.iesbelen.service.company.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("companies")
public class CompanyController {
    
    @Autowired
    CompanyService companyService;

    @GetMapping()
    @ResponseStatus(HttpStatus.OK)
    public List<Company> list(){
        return companyService.getAll();
    }

    @GetMapping("{id}")
    @ResponseStatus(HttpStatus.OK)
    public Optional<Company> one(@PathVariable long id){
        return this.companyService.find(id);
    }
}
