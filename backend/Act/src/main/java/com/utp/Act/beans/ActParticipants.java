package com.utp.Act.beans;

import java.io.Serializable;
import javax.persistence.ColumnResult;
import javax.persistence.ConstructorResult;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.NamedNativeQuery;
import javax.persistence.SqlResultSetMapping;

@SqlResultSetMapping(
    name = "participantMapping",
    classes = {
        @ConstructorResult(
            targetClass = Participants.class,
            columns = {
                @ColumnResult(name = "participant_id", type = Integer.class),
                @ColumnResult(name = "name", type = String.class),
                @ColumnResult(name = "surname", type = String.class),
                @ColumnResult(name = "email", type = String.class)
            }
        )
    }
)
@NamedNativeQuery(
    name = "ActParticipants.fetchActParticipantsDataRightJoin",
    query = "SELECT " + 
        "p.participant_id, p.email, p.name, p.surname " + 
        "FROM act_participants ap RIGHT JOIN participants p " +
        "ON ap.participants_participant_id = p.participant_id AND " + 
        "ap.act_act_id = ?1 " +
        "WHERE ap.participants_participant_id IS NULL",
    resultSetMapping = "participantMapping")
@Entity
public class ActParticipants implements Serializable {
    
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer actParticipant_id;
    @ManyToOne
    private Act act;
    @ManyToOne
    private Participants participants;

    public ActParticipants() { }

    public ActParticipants(Integer actParticipant_id, Act act, 
            Participants participants_id) 
    {
        this.actParticipant_id = actParticipant_id;
        this.act = act;
        this.participants = participants_id;
    }

    public Integer getActParticipant_id() {
        return actParticipant_id;
    }

    public void setActParticipant_id(Integer actParticipant_id) {
        this.actParticipant_id = actParticipant_id;
    }
    
    public Act getAct() {
        return act;
    }

    public void setAct(Act act) {
        this.act = act;
    }

    public Participants getParticipants() {
        return participants;
    }

    public void setParticipants(Participants participants) {
        this.participants = participants;
    }
    
}
