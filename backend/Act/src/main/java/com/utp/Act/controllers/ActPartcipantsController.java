package com.utp.Act.controllers;

import com.utp.Act.beans.ActParticipants;
import com.utp.Act.services.ActParticipantsService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ActPartcipantsController {

    @Autowired
    private ActParticipantsService actParticipantsService;

    @GetMapping(value = "/getactparticipants/{act_id}")
    public List<ActParticipants> getActParticipants(
            @PathVariable Integer act_id) {
        return actParticipantsService.getActParticipantsByActId(act_id);
    }

    @GetMapping(value = "/getavailpart/{act_id}")
    public List<ActParticipants> getAvailPartFromActPartiByActId(
            @PathVariable Integer act_id
    ) {
        return actParticipantsService.getAvailPartFromActPartiByActId(act_id);
    }

    @PostMapping(value = "/addactparticipants")
    public void addActParticipants(
            @RequestBody List<ActParticipants> actParticipants
    ) {
        actParticipantsService.addActParticipants(actParticipants);
    }

    @PutMapping(value = "/deleteparticipants")
    public void deleteActParticipants(
            @RequestBody List<ActParticipants> actParticipants
    ) {
        actParticipantsService.deleteActParticipants(actParticipants);
    }
}
