package com.example.ReactJavaCourse.Repository;

import com.example.ReactJavaCourse.Entity.Client;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientRepository extends CrudRepository<Client, Long> {
}
