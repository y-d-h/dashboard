package com.azone.control_system.controller;

import com.azone.control_system.dto.AdminDTO;
import com.azone.control_system.dto.ResponseDTO;
import com.azone.control_system.model.AdminEntity;
import com.azone.control_system.security.TokenProvider;
import com.azone.control_system.service.AdminService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@Slf4j
@RestController
@RequestMapping("/auth")
public class AdminController {
    @Autowired
    private AdminService adminService;
    @Autowired
    private TokenProvider tokenProvider;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AdminDTO dto){
        AdminEntity admin = adminService.getByCredentials(dto.getLoginId(), dto.getPassword());
        if(admin != null){
            final String token = tokenProvider.create(admin);
            final AdminDTO responseAdminDTO  = AdminDTO.builder()
                    .token(token)
                    .loginId(dto.getLoginId())
                    .password(dto.getPassword())
                    .name(dto.getName())
                    .build();
            return ResponseEntity.ok().body(responseAdminDTO);
        }else {
            ResponseDTO responseDTO = ResponseDTO.<AdminDTO>builder()
                    .error("Login Error")
                    .build();
            return ResponseEntity.badRequest().body(responseDTO);
        }
    }
}
