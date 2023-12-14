package com.spring.nutsandspices.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.spring.nutsandspices.entities.Customer;

@Repository
public interface CustomerRepository extends CrudRepository<Customer, Long> {

	@Override
	Customer save(Customer customer);
}
