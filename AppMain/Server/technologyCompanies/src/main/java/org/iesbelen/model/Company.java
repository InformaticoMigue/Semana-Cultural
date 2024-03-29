package org.iesbelen.model;

import java.time.LocalDate;
import java.util.List;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@Table(name = "Company")
public class Company {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "company_id")
    private long id;

    private String name;
    
    private String phone;
    
    private String email;
    
    private String website;
    
    @Column(name = "creation_date")
    private LocalDate creationDate;
    
    @Column(name = "number_employees")
    private long numberEmployees;
    
    @Column(name = "annual_income")
    private long annualIncome;
    
    @Column(name = "country_of_origin")
    private String countryOfOrigin;

    @OneToMany(mappedBy = "company", fetch = FetchType.EAGER)
    private List<Customer> customers;

    @ManyToMany
    @JoinTable(
        name = "Company_Service",
        joinColumns = @JoinColumn(name = "company_id"),
        inverseJoinColumns = @JoinColumn(name = "service_id")
    )
    private List<Solution> solutions;
    @OneToMany(mappedBy = "company", fetch = FetchType.EAGER)
    private List<Location> locations;

}
