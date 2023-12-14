package com.spring.nutsandspices.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.spring.nutsandspices.entities.Product;

@Repository
public interface ProductRepository extends CrudRepository<Product,Long> {

}
