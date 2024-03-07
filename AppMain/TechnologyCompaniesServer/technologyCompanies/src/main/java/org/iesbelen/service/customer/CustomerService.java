package org.iesbelen.service.customer;

import org.iesbelen.model.Company;
import org.iesbelen.model.Customer;
import org.iesbelen.repository.customer.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

public interface CustomerService {
    List<Customer> getAll();
    Optional<Customer> find(long id);
    Customer update(Customer customer);
    boolean delete(long id);

}
