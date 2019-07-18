package com.utp.Act.controllers;

import com.utp.Act.beans.Participants;
import com.utp.Act.services.ParticipantsService;
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
public class ParticipantsController {
    
    @Autowired
    private ParticipantsService participantsService;
    
    @GetMapping(value="/allparticipants")
    public List<Participants> getAllParticipants()
    {
        return participantsService.getAllParticipants();
    }
    
    @GetMapping(value="/getparticipant/{id}")
    public Participants getParticipant(@PathVariable Integer id)
    {
        return participantsService.getParticipant(id);
    }
    
    @PostMapping(value="/addparticipant")
    public void addParticipant(@RequestBody Participants participant)
    {
        participantsService.addParticipant(participant);
    }
    
    @PutMapping(value="/updparticipant")
    public void updateParticipant(@RequestBody Participants participant)
    {
        participantsService.updateParticipant(participant);
    }
    
    @DeleteMapping(value="/delparticipant/{id}")
    public void deleteParticipant(@PathVariable Integer id)
    {
        participantsService.deleteParticipant(id);
    }
}