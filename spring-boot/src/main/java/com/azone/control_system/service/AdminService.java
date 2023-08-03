package com.azone.control_system.service;

import com.azone.control_system.model.AdminEntity;
import com.azone.control_system.persistence.AdminRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class AdminService {
    @Autowired
    private AdminRepository repository;

    public AdminEntity getByCredentials(final String loginId, final String password){
        final AdminEntity originalAdmin = repository.findByLoginId(loginId);
        if(originalAdmin != null && originalAdmin.getPassword().equals(password)){
            return originalAdmin;
        }
        return null;
    }
}
