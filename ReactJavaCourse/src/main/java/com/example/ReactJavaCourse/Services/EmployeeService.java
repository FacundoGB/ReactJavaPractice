package com.example.ReactJavaCourse.Services;

import com.example.ReactJavaCourse.Entity.Employee;
import com.example.ReactJavaCourse.Repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService implements IEmployeeService{

    @Autowired
    public EmployeeRepository repo;

    @Override
    public List<Employee> getAll() {
        return (List<Employee>) repo.findAll();
    }

    @Override
    public Employee getById(Long id) {
        return (Employee) repo.findById(id).get();
    }

    @Override
    public void remove(Long id) {
        repo.deleteById(id);
    }

    @Override
    public void save(Employee employee) {
        repo.save(employee);
    }
}
