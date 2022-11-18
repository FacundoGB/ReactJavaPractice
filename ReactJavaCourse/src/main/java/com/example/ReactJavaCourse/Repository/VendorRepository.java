package com.example.ReactJavaCourse.Repository;

import com.example.ReactJavaCourse.Entity.Vendor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VendorRepository extends CrudRepository<Vendor, Long> {
}
