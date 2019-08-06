package com.utp.Act.repositories;

import com.utp.Act.beans.Commitments;
import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface CommitmentsRepository extends CrudRepository<Commitments, 
        Integer> {

    public List<Commitments> findByParticipantParticipantId(
            Integer participantId);

    public List<Commitments> findByActActIdAndParticipantParticipantId(
            Integer actId, Integer participantId);
}
