package com.azone.control_system.service;

import com.azone.control_system.model.ModelResultEntity;
import com.azone.control_system.persistence.ModelResultRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
public class ModelResultService {
    @Autowired
    private ModelResultRepository repository;

    public List<ModelResultEntity> retrieve(){
        return repository.findAll();
    }
}
