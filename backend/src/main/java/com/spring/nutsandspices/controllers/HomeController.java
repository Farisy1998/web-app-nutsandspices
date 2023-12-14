package com.spring.nutsandspices.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.nutsandspices.entities.Category;
import com.spring.nutsandspices.entities.Customer;
import com.spring.nutsandspices.entities.Product;
import com.spring.nutsandspices.services.CustomerService;
import com.spring.nutsandspices.services.ProductService;

@RestController
@RequestMapping("/")
public class HomeController {
	
	@Autowired
	ProductService productService;
	
	@RequestMapping("/products")
	@GetMapping
 	public Iterable<Product> getAllProducts(){
		return productService.fetchAllProducts();
	}
	
	@RequestMapping("/categories")
	@GetMapping
	public Iterable<Category> getAllCategories() {
		return productService.fetchAllCategories();
	}
	
}
