package com.azone.control_system.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ReferenceValueDTO {
    private int countHighTemperature;
    private int countHypothermia;
    private int countHighBloodPressure;
    private int countHypotension;
    private int countBradycardia;
    private int countTachycardia;
    private int total;
    private int today;
    private int normal;
}
