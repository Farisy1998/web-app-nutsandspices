package com.spring.nutsandspices.entities;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "products")
public class Product {

	@Id
	Long product_id;
	Long seller_id;
	Long category_id;
	String name;
	Long price;

	public Long getProduct_id() {
		return product_id;
	}

	public void setProduct_id(Long product_id) {
		this.product_id = product_id;
	}

	public Long getSeller_id() {
		return seller_id;
	}

	public void setSeller_id(Long seller_id) {
		this.seller_id = seller_id;
	}

	public Long getCategory_id() {
		return category_id;
	}

	public void setCategory_id(Long category_id) {
		this.category_id = category_id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Long getPrice() {
		return price;
	}

	public void setPrice(Long price) {
		this.price = price;
	}

	@Override
	public String toString() {
		return "Product [product_id=" + product_id + ", seller_id=" + seller_id + ", cateogy_id=" + category_id
				+ ", name=" + name + ", price=" + price + "]";
	}

}
