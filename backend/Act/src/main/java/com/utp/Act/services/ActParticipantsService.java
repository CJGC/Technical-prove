package com.utp.Act.services;

import com.utp.Act.beans.ActParticipants;
import com.utp.Act.repositories.ActParticipantsRepository;
import com.utp.Act.beans.Participants;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ActParticipantsService {

    @Autowired
    private ActParticipantsRepository actParticipantsRepository;

    public List<ActParticipants> getActParticipantsByActId(Integer act_id) {
        return actParticipantsRepository.findByActActId(act_id);
    }

    public void addActParticipants(List<ActParticipants> actParticipant) {
        actParticipantsRepository.saveAll(actParticipant);
    }

    public void deleteActParticipants(List<ActParticipants> actParticipant) {
        actParticipantsRepository.deleteAll(actParticipant);
    }

    public List<ActParticipants> getAvailPartFromActPartiByActId(Integer act_id) 
    {
        List<Participants> participants
                = this.actParticipantsRepository.
                        fetchActParticipantsDataRightJoin(act_id);

        List<ActParticipants> tempActParticipants = new ArrayList<>();
        for (int i = 0; i < participants.size(); i++) {
            ActParticipants actParticipant = new ActParticipants(
                    0,
                    null,
                    participants.get(i)
            );

            tempActParticipants.add(actParticipant);
        }

        return tempActParticipants;
    }
}
