package com.utp.Act.repositories;

import com.utp.Act.beans.Participants;
import org.springframework.data.repository.CrudRepository;

public interface ParticipantsRepository extends CrudRepository<Participants, 
        Integer> {
    
}
