package com.spring.nutsandspices.services.impl;

import java.util.List;

import javax.websocket.server.ServerEndpoint;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.nutsandspices.entities.Category;
import com.spring.nutsandspices.entities.Product;
import com.spring.nutsandspices.repositories.CategoryRepository;
import com.spring.nutsandspices.repositories.ProductRepository;
import com.spring.nutsandspices.services.ProductService;

@Service
public class ProductServiceImpl implements ProductService {
	
	@Autowired
	ProductRepository productRepos;
	
	@Autowired
	CategoryRepository categoryRepos;

	public Iterable<Product> fetchAllProducts() {
		return productRepos.findAll();
	}

	public Iterable<Category> fetchAllCategories() {
		return categoryRepos.findAll();
	}
	
	
}
