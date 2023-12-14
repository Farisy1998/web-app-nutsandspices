package com.spring.nutsandspices.services;

import com.spring.nutsandspices.entities.Category;
import com.spring.nutsandspices.entities.Product;

public interface ProductService {

		Iterable<Product> fetchAllProducts();
		Iterable<Category> fetchAllCategories();
}
