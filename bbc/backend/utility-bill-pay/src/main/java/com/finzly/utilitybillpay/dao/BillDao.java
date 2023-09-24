package com.finzly.utilitybillpay.dao;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.finzly.utilitybillpay.entity.Bill;

@Repository
public class BillDao {
	@Autowired
	SessionFactory factory;
	

	public String getCustomerBillDetails(Bill bill) {
		return null;
	}

	public List<Bill> getAllBillDetails() {
		Session session = factory.openSession();
		Criteria criteria = session.createCriteria(Bill.class);
		return criteria.list();
	}


	public List<Bill> getBillsByCustomerId(int customerId) {
	    try (Session session = factory.openSession()) {
	        Criteria criteria = session.createCriteria(Bill.class);
	        criteria.add(Restrictions.eq("customerId", customerId));
	        return criteria.list();
	    }
	}

	public List<Bill> getBillsByNumber(int billNumber) {
		try (Session session = factory.openSession()) {
	        Criteria criteria = session.createCriteria(Bill.class);
	        criteria.add(Restrictions.eq("billNumber", billNumber));
	        return criteria.list();
	    }
	}

	public String add(Bill bill) {
		Session session = factory.openSession();
		session.update(bill);
		session.beginTransaction().commit();
		return "successfull";
	}


}
	








