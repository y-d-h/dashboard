package com.azone.control_system.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class CountAbnormalDTO {
    private int countHighTemperature;
    private int countHypothermia;
    private int countHighBloodPressure;
    private int countHypotension;
    private int countBradycardia;
    private int countTachycardia;
    private String date;
}
