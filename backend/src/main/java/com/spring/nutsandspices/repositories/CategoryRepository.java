package com.spring.nutsandspices.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.spring.nutsandspices.entities.Category;

@Repository
public interface CategoryRepository extends CrudRepository<Category, Long> {

}
