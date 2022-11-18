package com.example.ReactJavaCourse.Services;

import com.example.ReactJavaCourse.Entity.Vendor;

import java.util.List;

public interface IVendorService {
    List<Vendor> getAll();
    Vendor getById(Long id);
    void remove(Long id);
    void save(Vendor vendor);
}
