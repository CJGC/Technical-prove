package com.utp.Act.services;

import com.utp.Act.beans.Act;
import com.utp.Act.repositories.ActRepository;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ActService {

    @Autowired
    private ActRepository actRepository;

    public List<Act> getAllAct() {
        List<Act> act = new ArrayList<>();
        actRepository.findAll().
                forEach(act::add);
        return act;
    }

    public Act getAct(Integer act_id) {
        return actRepository.findById(act_id).get();
    }

    public void addAct(Act act) {
        actRepository.save(act);
    }

    public void updateAct(Act act) {
        actRepository.save(act);
    }

    public void deleteAct(Integer id) {
        actRepository.deleteById(id);
    }
}
