package com.utp.Act.controllers;

import com.utp.Act.beans.Act;
import com.utp.Act.services.ActService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ActController {

    @Autowired
    private ActService actService;

    @GetMapping(value = "/allact")
    public List<Act> getAllAct() {
        return actService.getAllAct();
    }

    @GetMapping(value = "/getact/{id}")
    public Act getAct(@PathVariable Integer id) {
        return actService.getAct(id);
    }

    @PostMapping(value = "/addact")
    public void addAct(@RequestBody Act act) {
        actService.addAct(act);
    }

    @PutMapping(value = "/updact")
    public void updateAct(@RequestBody Act act) {
        actService.updateAct(act);
    }

    @DeleteMapping(value = "/delact/{id}")
    public void deleteAct(@PathVariable Integer id) {
        actService.deleteAct(id);
    }
}
