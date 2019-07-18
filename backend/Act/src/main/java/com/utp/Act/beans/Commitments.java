package com.utp.Act.beans;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Commitments {
    
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer commitment_id;
    private String title;
    private String description;
    @ManyToOne
    private Act act;
    @ManyToOne
    private Participants participant;
    
    public Commitments() {}
    
    public Integer getCommitment_id() {
        return commitment_id;
    }

    public void setCommitment_id(Integer commitment_id) {
        this.commitment_id = commitment_id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Act getAct() {
        return act;
    }

    public void setAct(Act act) {
        this.act = act;
    }

    public Participants getParticipant() {
        return participant;
    }

    public void setParticipant(Participants participant) {
        this.participant = participant;
    }
    
}
