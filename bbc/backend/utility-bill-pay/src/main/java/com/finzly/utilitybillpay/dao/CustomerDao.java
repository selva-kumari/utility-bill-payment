package com.finzly.utilitybillpay.dao;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.finzly.utilitybillpay.entity.Customer;

@Repository
public class CustomerDao {
	@Autowired
	SessionFactory factory;

		
	public String addCustomer(Customer customer) {
		org.hibernate.Session session=factory.openSession();
		session.save(customer);
		session.beginTransaction().commit();
		return "Customer details added successfully";
	}


	public List<Customer> getAllCustomerDetails() {
		Session session = factory.openSession();
		Criteria criteria = session.createCriteria(Customer.class);
		return criteria.list();
	}

}
