package com.utp.Act.controllers;

import com.utp.Act.beans.Commitments;
import com.utp.Act.services.CommitmentsService;
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
public class CommitmentsController {

    @Autowired
    private CommitmentsService commitmentsService;

    @GetMapping(value = "/allcommitments")
    public List<Commitments> getAllAct() {
        return commitmentsService.getAllCommitments();
    }

    @GetMapping(value = "/getcommitment/{id}")
    public Commitments getCommitment(@PathVariable Integer id) {
        return commitmentsService.getCommitment(id);
    }

    @PostMapping(value = "/addcommitment")
    public void addCommitment(@RequestBody Commitments commitment) {
        commitmentsService.addCommitment(commitment);
    }

    @PutMapping(value = "/updcommitment")
    public void updateCommitment(@RequestBody Commitments commitment) {
        commitmentsService.updateCommitment(commitment);
    }

    @DeleteMapping(value = "/delcommitment/{id}")
    public void deleteCommitment(@PathVariable Integer id) {
        commitmentsService.deleteCommitment(id);
    }

    @GetMapping(value = "getpartcommitments/{participant_id}")
    public List<Commitments> getCommitmentsByPartcicipant(
            @PathVariable Integer participant_id) {
        return commitmentsService.getCommitmentsByPartcicipant(participant_id);
    }

    @GetMapping(value = "getcommitmentsbyactandpart/{act_id}/{participant_id}")
    public List<Commitments> getCommitmentByActAndParticipantID(
            @PathVariable Integer act_id, @PathVariable Integer participant_id) 
    {
        return commitmentsService.getCommitmentByActAndParticipantID(
                act_id, participant_id);
    }
}
