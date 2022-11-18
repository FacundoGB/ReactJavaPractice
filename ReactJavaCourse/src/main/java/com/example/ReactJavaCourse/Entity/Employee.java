package com.example.ReactJavaCourse.Entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter@Setter@AllArgsConstructor@NoArgsConstructor
@Entity
@Table(name="employees")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idemployee;

    private String firstname;
    private String surname;
    private String email;
    private String phone;
    private String address;
    private Double salary;
}
