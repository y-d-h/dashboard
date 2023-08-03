package com.azone.control_system.service;

import com.azone.control_system.dto.CountAbnormalDTO;
import com.azone.control_system.model.UserInputEntity;
import com.azone.control_system.persistence.UserInputRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class UserInputService {
    @Autowired
    private UserInputRepository repository;

    public UserInputEntity create(final UserInputEntity entity){
        return repository.save(entity);
    }

    public List<UserInputEntity> findAll(){
        return repository.findAll();
    }

    public List<UserInputEntity> findByPhone(String phone){
        return repository.findByPhone(phone);
    }

    public int countHighTemperature(){
        List<UserInputEntity> users = repository.findByTemperatureGreaterThanEqual(37.2);
        return users.size();
    }
    public int countHypothermia(){
        List<UserInputEntity> users = repository.findByTemperatureLessThanEqual(36.1);
        return users.size();
    }
    public int countHighBloodPressure(){
        List<UserInputEntity> users = repository.findBySbpGreaterThanEqual(120);
        return users.size();
    }
    public int countHypotension(){
        List<UserInputEntity> users = repository.findBySbpLessThanEqual(115);
        return users.size();
    }
    public int countBradycardia(){
        List<UserInputEntity> users = repository.findByPulseLessThanEqual(60);
        return users.size();
    }
    public int countTachycardia(){
        List<UserInputEntity> users = repository.findByPulseGreaterThanEqual(100);
        return users.size();
    }

    public int countStaticHypothermia(String date){
        List<UserInputEntity> users = repository.findByTemperatureLessThanEqualAndTimeEquals(35, date);
        return users.size();
    }
    public int countStaticHighBloodPressure(String date){
        List<UserInputEntity> users = repository.findBySbpGreaterThanEqualAndTimeEquals(120, date);
        return users.size();
    }

    public int countStaticHypotension(String date){
        List<UserInputEntity> users = repository.findBySbpLessThanEqualAndTimeEquals(115, date);
        return users.size();
    }
    public int countStaticBradycardia(String date){
        List<UserInputEntity> users = repository.findByPulseLessThanEqualAndTimeEquals(60, date);
        return users.size();
    }
    public int countStaticTachycardia(String date){
        List<UserInputEntity> users = repository.findByPulseGreaterThanEqualAndTimeEquals(100, date);
        return users.size();
    }

    public int totalCount(){
        List<UserInputEntity> users = repository.findAll();
        return users.size();
    }
    public int todayCount(String date){
        return repository.countByTimeGreaterThanEqual(date);
    }

    public int countStaticHighTemperature(String date){

        return repository.findByTemperatureGreaterThanEqualAndTimeEquals(37.1, date).size();
    }


    public List<UserInputEntity> searchUserInput(String name, int sex, int age, int height, int weight, int pulse, int sbp, int dbp, double temperature, String phone, String time){
        if ( name == null){ name = "";}
        if ( time == null){ time = "";}
        if ( phone == null){ phone = "";}
        int sexmax = sex;
        int agemax = age + 10;
        int heightmax = height + 10;
        int weightmax = weight + 10;
        int pulsemax = pulse + 10;
        double temperaturemax = temperature + 1;
        int sbpmax = sbp + 10;
        int dbpmax = dbp + 10;
        if( sex == 0 ){ sex = 1; sexmax = 2;}
        if(age == 0 ){agemax = 100;}
        if(height == 0 ){heightmax = 200;}
        if(weight == 0 ){weightmax = 200;}
        if(pulse == 0 ){pulsemax = 200;}
        if(sbp == 0 ){sbpmax = 200;}
        if(dbp == 0 ){dbpmax = 200;}
        if(temperature == 0){temperaturemax = 100;}

        return repository.searchUserInput(name, sex, age,
                height,
                weight, pulse, sbp, dbp,
                temperature,
                sexmax,
                agemax,
                heightmax,
                weightmax, pulsemax, sbpmax, dbpmax,
                temperaturemax,
                phone, time
        );
    }


}
