package org.iesbelen.service.customer;

import org.iesbelen.model.Customer;
import org.iesbelen.repository.customer.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerServiceImpl implements CustomerService{

    @Autowired
    CustomerRepository customerRepository;

    @Override
    public List<Customer> getAll() {
        return (List<Customer>) customerRepository.findAll();
    }

    @Override
    public Optional<Customer> find(long id) {
        return this.customerRepository.findById(id);
    }

    @Override
    public Customer update(Customer customer) {
        return this.customerRepository.save(customer);
    }

    @Override
    public boolean delete(long id) {
        try {
            this.customerRepository.delete(this.find(id).get());
            return true;
        }catch (Exception e){
            return false;
        }
    }
}
