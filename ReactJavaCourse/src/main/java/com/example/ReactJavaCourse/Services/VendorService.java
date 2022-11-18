package com.example.ReactJavaCourse.Services;

import com.example.ReactJavaCourse.Entity.Vendor;
import com.example.ReactJavaCourse.Repository.VendorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VendorService implements IVendorService {

    @Autowired
    public VendorRepository repo;

    @Override
    public List<Vendor> getAll() {
        return (List<Vendor>) repo.findAll();
    }

    @Override
    public Vendor getById(Long id) {
        return (Vendor) repo.findById(id).get();
    }

    @Override
    public void remove(Long id) {
        repo.deleteById(id);

    }

    @Override
    public void save(Vendor vendor) {
        repo.save(vendor);
    }
}
