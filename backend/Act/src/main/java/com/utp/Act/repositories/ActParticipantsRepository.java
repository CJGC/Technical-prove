package com.utp.Act.repositories;

import com.utp.Act.beans.ActParticipants;
import com.utp.Act.beans.Participants;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface ActParticipantsRepository extends 
        CrudRepository<ActParticipants, Integer> 
{
    public List<ActParticipants> findByActActId(Integer act_id);
    
    @Query(nativeQuery = true)
    public List<Participants> fetchActParticipantsDataRightJoin(Integer act_id);
    
}
