package com.example.ReactJavaCourse.Services;

import com.example.ReactJavaCourse.Entity.Client;

import java.util.List;

public interface IClientService {

    List<Client> getAll();
    Client getById(Long id);
    void remove(Long id);
    void save(Client client);
}
