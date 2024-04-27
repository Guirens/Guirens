package br.com.projeto.controller;

import br.com.projeto.constant.Constant;
import br.com.projeto.model.Client;
import br.com.projeto.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class ClientController {

    @Autowired
    private ClientService clientService;

    @PostMapping(Constant.API_CLIENT)
    public void insert(@RequestBody Client client){
        clientService.save(client);
    }

    @PutMapping(Constant.API_CLIENT)
    public void update(@RequestBody Client client){
        clientService.save(client);
    }

    @DeleteMapping(Constant.API_CLIENT + "/{id}")
    public void deleteById(@PathVariable("id") String id){
        clientService.deleteById(id);
    }

    @GetMapping(Constant.API_CLIENT)
    public List<Client> findAll(){
        return clientService.findAll();
    }

    @GetMapping(Constant.API_CLIENT + "/{id}")
    public Optional<Client> findById(@PathVariable("id") String id){
        return clientService.findById(id);
    }

}
