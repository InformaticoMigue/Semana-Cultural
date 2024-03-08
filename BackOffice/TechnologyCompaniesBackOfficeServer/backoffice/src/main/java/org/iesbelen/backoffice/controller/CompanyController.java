package org.iesbelen.backoffice.controller;

import lombok.extern.slf4j.Slf4j;
import org.iesbelen.backoffice.model.Company;
import org.iesbelen.backoffice.service.company.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Slf4j
@RestController
@CrossOrigin(origins = "http://localhost:61564")
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

    @ResponseBody
    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.OK)
    public void delete(@PathVariable long id){
        System.out.println("a");
        this.companyService.delete(id);
    }
}
