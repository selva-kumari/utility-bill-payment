package com.finzly.utilitybillpay.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.finzly.utilitybillpay.entity.Bill;
import com.finzly.utilitybillpay.service.BillService;

@CrossOrigin("*")
@RestController
@RequestMapping("/bill")
public class BillController {
	@Autowired
	BillService billservice;
	
	
	@GetMapping("AllBill")
	public List<Bill> getAllBillDetails() {
		return billservice. getAllBillDetails();
	}
	
	
	@GetMapping("/getbill")
    public List<Bill> getBillsByCustomerId(
            @RequestParam("customerId") int customerId) {
        return billservice.getBillsByCustomerId(customerId);
    }
	
	@GetMapping("/billnumber")
    public List<Bill> getBillsByBillNumber(
            @RequestParam("billNumber") int billNumber) {
        return billservice.getBillsByNumber(billNumber);
    }
	
	
	@PutMapping("/updateBillStatus")
    public String updateBillStatus(@RequestParam("billNumber")int billNumber) {
		return billservice.updateBillStatus(billNumber);
    }
	
	
	
	}

