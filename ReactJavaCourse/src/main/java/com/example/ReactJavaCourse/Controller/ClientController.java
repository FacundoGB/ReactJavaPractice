package com.example.ReactJavaCourse.Controller;

import com.example.ReactJavaCourse.Entity.Client;
import com.example.ReactJavaCourse.Services.IClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ClientController  {

    @Autowired
    private IClientService service;

    //return list of clients
    @GetMapping("/api/clients")
    public List<Client> getAll() {
        return service.getAll();
    }

    @GetMapping("/api/clients/{id}")
    public Client getById(@PathVariable String id) {
        return service.getById(Long.parseLong(id));
    }

    @DeleteMapping("/api/clients/{id}")
    public void remove(@PathVariable String id) {
        service.remove(Long.parseLong(id));
    }

    @PostMapping("/api/clients")
    public void save(@RequestBody Client client) {
        service.save(client);
    }

}
