package com.utp.Act.beans;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Commitments implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonProperty(value = "commitmentId")
    @Column(name = "commitmentId")
    private Integer commitmentId;
    
    @JsonProperty(value = "title")
    @Column(name = "title")
    private String title;
    
    @JsonProperty(value = "description")
    @Column(name = "description", length=2048)
    private String description;
    
    @ManyToOne
    @JsonProperty(value = "act")
    private Act act;
    
    @ManyToOne
    @JsonProperty(value = "participant")
    private Participants participant;

    public Commitments() {
    }

    public Commitments(
            Integer commitmentId, String title, String description, Act act,
            Participants participant) {
        this.commitmentId = commitmentId;
        this.title = title;
        this.description = description;
        this.act = act;
        this.participant = participant;
    }

    public Integer getCommitmentId() {
        return commitmentId;
    }

    public void setCommitmentId(Integer commitmentId) {
        this.commitmentId = commitmentId;
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
