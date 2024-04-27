package br.com.projeto.service;

import br.com.projeto.model.Client;
import br.com.projeto.repository.ClientRepositoy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClientService {

    @Autowired
    private ClientRepositoy clientRepositoy;

    public void save(Client client){
        clientRepositoy.save(client);
    }

    public List<Client> findAll(){
        return clientRepositoy.findAll();
    }

    public Optional<Client> findById(String id){
        return clientRepositoy.findById(id);
    }

    public void deleteById(String id){
        clientRepositoy.deleteById(id);
    }
}
