package com.example.ReactJavaCourse.Services;

import com.example.ReactJavaCourse.Entity.Employee;

import java.util.List;

public interface IEmployeeService {
    List<Employee> getAll();
    Employee getById(Long id);
    void remove(Long id);
    void save(Employee employee);
}
