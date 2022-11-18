package com.example.ReactJavaCourse.Services;

import com.example.ReactJavaCourse.Entity.Client;
import com.example.ReactJavaCourse.Repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ClientService implements IClientService {

    @Autowired
    public ClientRepository repo;

    @Override
    public List<Client> getAll() {
        return (List<Client>) repo.findAll();
    }

    @Override
    public Client getById(Long id) {
        return (Client) repo.findById(id).get();
    }

    @Override
    public void remove(Long id) {
        repo.deleteById(id);
    }
    @Override
    public void save(Client client) {
        repo.save(client);
    }
}
