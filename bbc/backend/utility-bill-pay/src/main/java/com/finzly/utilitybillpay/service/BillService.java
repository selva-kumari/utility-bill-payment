package com.finzly.utilitybillpay.service;


import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.finzly.utilitybillpay.dao.BillDao;
import com.finzly.utilitybillpay.entity.Bill;

@Service 
public class BillService {
	@Autowired
	BillDao billdao;

	public List<Bill> getAllBillDetails() {
		return billdao. getAllBillDetails() ;
	}

	
	public List<Bill> getBillsByCustomerId(int customerId) {
        return billdao.getBillsByCustomerId(customerId);
    }


	public List<Bill> getBillsByNumber(int billNumber) {
		return billdao.getBillsByNumber(billNumber);
	}


	public String updateBillStatus(int billNumber) {
		List<Bill> bills = billdao.getBillsByNumber(billNumber);
		Bill bill=new Bill();
		
		for(Bill b:bills) {
			bill.setBillStatus("paid");
			bill.setAmount(b.getAmount());
			bill.setBillDueDate(b.getBillDueDate());
			bill.setCustomerId(b.getCustomerId());
			bill.setCustomerName(b.getCustomerName());
			bill.setUnitConsumption(b.getUnitConsumption());
			bill.setBillNumber(b.getBillNumber());
			return billdao.add(bill);
		}
		return null;
		
	}


}
