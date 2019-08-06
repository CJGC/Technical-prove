package com.utp.Act.beans;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.io.Serializable;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;

@Entity
public class Act implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonProperty(value = "actId")
    @Column(name = "actId")
    private Integer actId;
    
    @JsonProperty(value = "location")
    @Column(name = "location")
    private String location;
    
    @JsonProperty(value = "project")
    @Column(name = "project")
    private String project;
    
    @JsonProperty(value = "content")
    @Column(name = "content", length = 2048)
    private String content;
    
    @Temporal(javax.persistence.TemporalType.TIMESTAMP)
    @JsonProperty(value = "date")
    @Column(name = "actDate")
    Date actDate;
    
    @Temporal(javax.persistence.TemporalType.TIMESTAMP)
    @JsonProperty(value = "nextMeetingDate")
    @Column(name = "nextMeetingDate")
    Date nextMeetingDate;

    public Act(Integer actId, String project, String content, Date date,
            Date nextMeetingDate) {
        this.actId = actId;
        this.project = project;
        this.content = content;
        this.actDate = date;
        this.nextMeetingDate = nextMeetingDate;
    }

    public Act() {
    }

    public Integer getActId() {
        return actId;
    }

    public void setActId(Integer actId) {
        this.actId = actId;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getProject() {
        return project;
    }

    public void setProject(String project) {
        this.project = project;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Date getDate() {
        return actDate;
    }

    public void setDate(Date actDate) {
        this.actDate = actDate;
    }

    public Date getNextMeetingDate() {
        return nextMeetingDate;
    }

    public void setNextMeetingDate(Date nextMeetingDate) {
        this.nextMeetingDate = nextMeetingDate;
    }

}
