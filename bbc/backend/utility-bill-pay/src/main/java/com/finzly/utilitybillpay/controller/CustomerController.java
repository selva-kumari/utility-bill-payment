package com.finzly.utilitybillpay.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.finzly.utilitybillpay.entity.Customer;
import com.finzly.utilitybillpay.service.CustomerService;

@CrossOrigin("*")
@RestController
@RequestMapping("customer")
public class CustomerController {
	@Autowired 
	CustomerService customerservice;
		
	@GetMapping("customer-details")
	public List<Customer> getAllCustomerDetails() {
		return customerservice.getAllCustomerDetails();
	}
	@PostMapping("customer-login") 
	public String customerLogin(@RequestBody Customer customer) {
		return customerservice.customerLogin(customer);
	}
}
		
	