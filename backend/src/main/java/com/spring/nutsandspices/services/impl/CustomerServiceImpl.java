package com.spring.nutsandspices.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.nutsandspices.entities.Customer;
import com.spring.nutsandspices.repositories.CustomerRepository;
import com.spring.nutsandspices.services.CustomerService;

@Service
public class CustomerServiceImpl implements CustomerService {
	
	@Autowired
	CustomerRepository customerRepos;

	@Override
	public Customer create(Customer customer) {
		return customerRepos.save(customer);
	}

}
