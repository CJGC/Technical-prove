package com.utp.Act.beans;

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
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer actId;
    private String location;
    private String project;
    @Column(length=2048)
    private String content;
    @Temporal(javax.persistence.TemporalType.TIMESTAMP)
    Date actDate;
    @Temporal(javax.persistence.TemporalType.TIMESTAMP)
    Date nextMeetingDate;

    public Act(Integer actId, String project, String content, Date date, 
            Date nextMeetingDate) 
    {
        this.actId = actId;
        this.project = project;
        this.content = content;
        this.actDate = date;
        this.nextMeetingDate = nextMeetingDate;
    }

    public Act() {}
    
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
