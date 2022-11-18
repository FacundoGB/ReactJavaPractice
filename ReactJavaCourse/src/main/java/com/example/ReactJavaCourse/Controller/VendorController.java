package com.example.ReactJavaCourse.Controller;

import com.example.ReactJavaCourse.Entity.Client;
import com.example.ReactJavaCourse.Entity.Vendor;
import com.example.ReactJavaCourse.Services.IClientService;
import com.example.ReactJavaCourse.Services.IVendorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class VendorController {
    @Autowired
    private IVendorService service;

    //return list of clients
    @GetMapping("/api/vendors")
    public List<Vendor> getAll() {
        return service.getAll();
    }

    @GetMapping("/api/vendors/{id}")
    public Vendor getById(@PathVariable String id) {
        return service.getById(Long.parseLong(id));
    }

    @DeleteMapping("/api/vendors/{id}")
    public void remove(@PathVariable String id) {
        service.remove(Long.parseLong(id));
    }

    @PostMapping("/api/vendors")
    public void save(@RequestBody Vendor vendor) {
        service.save(vendor);
    }

}
