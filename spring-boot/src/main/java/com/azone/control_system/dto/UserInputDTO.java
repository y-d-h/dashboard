package com.azone.control_system.dto;

import com.azone.control_system.model.UserInputEntity;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;
import java.time.LocalDateTime;


@Data
@NoArgsConstructor
public class UserInputDTO {
    private String id;
    private String name;
    private int sex;
    private int age;
    private int height;
    private int weight;
    private int pulse;
    private int sbp;
    private int dbp;
    private double temperature;

    private String phone;
    private String time;

    private LocalDateTime date;

    private boolean normal;

    public UserInputDTO(final UserInputEntity entity){
        this.id = entity.getId();
        this.name = entity.getName();
        this.sex = entity.getSex();
        this.age = entity.getAge();
        this.height = entity.getHeight();
        this.weight = entity.getWeight();
        this.pulse = entity.getPulse();
        this.sbp = entity.getSbp();
        this.dbp = entity.getDbp();
        this.temperature = entity.getTemperature();
        this.phone = entity.getPhone();
        this.time = entity.getTime();
        this.normal = entity.isNormal();
//        this.date = entity.getDate();
    }

    public static UserInputEntity toEntity(final UserInputDTO dto){
        return UserInputEntity.builder()
                .id(dto.getId())
                .name(dto.getName())
                .sex(dto.getSex())
                .age(dto.getAge())
                .height(dto.getHeight())
                .weight(dto.getWeight())
                .pulse(dto.getPulse())
                .sbp(dto.getSbp())
                .dbp(dto.getDbp())
                .temperature(dto.getTemperature())
                .phone(dto.getPhone())
                .time(dto.getTime())
                .normal(dto.isNormal())
//                .date(dto.getDate())
                .build();
    }
}
