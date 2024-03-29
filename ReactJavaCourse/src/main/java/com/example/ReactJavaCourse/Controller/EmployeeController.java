package com.example.ReactJavaCourse.Controller;

import com.example.ReactJavaCourse.Entity.Client;
import com.example.ReactJavaCourse.Entity.Employee;
import com.example.ReactJavaCourse.Services.IEmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class EmployeeController {

    @Autowired
    private IEmployeeService service;


    @GetMapping("/api/employees")
    public List<Employee> getAll() {
        return service.getAll();
    }

    @GetMapping("/api/employees/{id}")
    public Employee getById(@PathVariable String id) {
        return service.getById(Long.parseLong(id));
    }

    @DeleteMapping("/api/employees/{id}")
    public void remove(@PathVariable String id) {
        service.remove(Long.parseLong(id));
    }

    @PostMapping("/api/employees")
    public void save(@RequestBody Employee employee) {
        service.save(employee);
    }

}
