package org.iesbelen.controller;

import org.iesbelen.dto.CustomerDTO;
import org.iesbelen.dto.ProjectDTO;
import org.iesbelen.mapper.MapperCustomer;
import org.iesbelen.mapper.MapperProject;
import org.iesbelen.records.customer.CustomerListRequestDto;
import org.iesbelen.service.customer.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("customers")
public class CustomerController {
    @Autowired
    CustomerService customerService;
    @Autowired
    MapperCustomer mapperCustomer;
    @Autowired
    MapperProject mapperProject;

    @GetMapping()
    @ResponseStatus(HttpStatus.OK)
    public List<CustomerDTO> list(){
        return (this.customerService.getAll()
                .stream()
                .map(customer -> {
                    List<ProjectDTO> projectDTOS = customer.getProjects()
                            .stream()
                            .map(project -> mapperProject.toProjectDTO(project,customer.getId(),customer.getCompany().getId()))
                            .toList();
                    return mapperCustomer.toCustomerDTO(customer,customer.getCompany().getId(),projectDTOS);
                }).toList());
    }
    @GetMapping("{id}")
    @ResponseStatus(HttpStatus.OK)
    public Optional<CustomerDTO> one(@PathVariable long id) {
        return this.customerService.find(id)
                .map(customer -> {
                    List<ProjectDTO> projectDTOS = customer.getProjects()
                            .stream()
                            .map(project -> mapperProject.toProjectDTO(project,customer.getId(),customer.getCompany().getId()))
                            .toList();
                    return (mapperCustomer.toCustomerDTO(customer,customer.getCompany().getId(),projectDTOS));
                });
    }
}
