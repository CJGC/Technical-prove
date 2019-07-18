package com.utp.Act.services;

import com.utp.Act.beans.Participants;
import com.utp.Act.repositories.ParticipantsRepository;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ParticipantsService {
    
    @Autowired
    private ParticipantsRepository participantRepository;
    
    public List<Participants> getAllParticipants()
    {
        List<Participants> participants = new ArrayList<>();
        participantRepository.findAll().
        forEach(participants::add);
        return participants;
    }
    
    public Participants getParticipant(Integer participant_id)
    {
        return participantRepository.findById(participant_id).get();
    }
    
    public void addParticipant(Participants participant)
    {
        participantRepository.save(participant);
    }
    
    public void updateParticipant(Participants participant)
    {
        participantRepository.save(participant);
    }
    
    public void deleteParticipant(Integer id)
    {
        participantRepository.deleteById(id);
    }
}
