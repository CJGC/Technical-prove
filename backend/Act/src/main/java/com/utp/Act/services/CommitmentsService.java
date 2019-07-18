package com.utp.Act.services;

import com.utp.Act.beans.Commitments;
import com.utp.Act.repositories.CommitmentsRepository;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CommitmentsService {
    
    @Autowired
    private CommitmentsRepository commitmentsRepository;
    
    public List<Commitments> getAllCommitments()
    {
        List<Commitments> commitments = new ArrayList<>();
        commitmentsRepository.findAll().
        forEach(commitments::add);
        return commitments;
    }
    
    public Commitments getCommitment(Integer commitment_id)
    {
        return commitmentsRepository.findById(commitment_id).get();
    }
    
    public void addCommitment(Commitments commitment)
    {
        commitmentsRepository.save(commitment);
    }
    
    public void updateCommitment(Commitments commitment)
    {
        commitmentsRepository.save(commitment);
    }
    
    public void deleteCommitment(Integer id)
    {
        commitmentsRepository.deleteById(id);
    }
    
    public List<Commitments> getCommitmentsByPartcicipant(Integer 
            participant_id) 
    {
        return commitmentsRepository.findByParticipantParticipantId(
                participant_id);
    }
}
