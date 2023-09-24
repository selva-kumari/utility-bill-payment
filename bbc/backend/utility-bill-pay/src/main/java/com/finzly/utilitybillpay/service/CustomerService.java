package com.finzly.utilitybillpay.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.finzly.utilitybillpay.dao.CustomerDao;
import com.finzly.utilitybillpay.entity.Customer;

@Service
public class CustomerService {
	@Autowired
	CustomerDao customerdao;

	public String addCustomer(Customer customer) {
		return customerdao.addCustomer(customer);
	}

	public List<Customer> getAllCustomerDetails() {
		return customerdao.getAllCustomerDetails();
	}

	public String customerLogin(Customer customer) {
		List<Customer> list=customerdao.getAllCustomerDetails();
		for(Customer l : list) {
			if(l.getCustomerId()==customer.getCustomerId() && l.getOtp().equals(customer.getOtp())) {
				return "Login Successfull";
			}
		}
		return "Invalid Login";
	}

}
