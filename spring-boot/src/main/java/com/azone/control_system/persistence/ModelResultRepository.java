package com.azone.control_system.persistence;

import com.azone.control_system.model.ModelResultEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ModelResultRepository extends JpaRepository<ModelResultEntity, String> {
    List<ModelResultEntity> findAll();
}
