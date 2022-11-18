package com.example.ReactJavaCourse.Entity;

import lombok.*;

import javax.persistence.*;


@Getter @Setter
@AllArgsConstructor @NoArgsConstructor
@ToString @EqualsAndHashCode
@Entity
@Table(name="clients")
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idclients;

    private String firstname;
    private String surname;
    private String email;
    private String phone;
    private String address;

}
