package com.spring.nutsandspices.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.nutsandspices.entities.Customer;
import com.spring.nutsandspices.services.CustomerService;

@RestController
@RequestMapping("/")
public class CustomerController {
	
	@Autowired
	CustomerService customerService;
	
	@RequestMapping("/addcustomer")
	@PostMapping
	public Customer addCustomer(@RequestBody Customer customer) {
		return customerService.create(customer);
	}
}
