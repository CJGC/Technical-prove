package com.utp.Act.beans;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Participants implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonProperty(value = "participantId")
    @Column(name = "participantId")
    private Integer participantId;

    @JsonProperty(value = "name")
    @Column(name = "name")
    private String name;

    @JsonProperty(value = "surname")
    @Column(name = "surname")
    private String surname;

    @JsonProperty(value = "email")
    @Column(name = "email")
    private String email;

    public Participants(Integer participantId, String name, String surname,
            String email) {
        this.participantId = participantId;
        this.name = name;
        this.surname = surname;
        this.email = email;
    }

    public Participants() {
    }

    public Integer getParticipant_id() {
        return participantId;
    }

    public void setParticipant_id(Integer participantId) {
        this.participantId = participantId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

}
