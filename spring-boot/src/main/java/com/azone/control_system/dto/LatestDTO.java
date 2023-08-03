package com.azone.control_system.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class LatestDTO {
//    private List<Integer> countHighTemperature;
//    private List<Integer> countHypothermia;
//    private List<Integer> countHighBloodPressure;
//    private List<Integer> countHypotension;
//    private List<Integer> countBradycardia;
//    private List<Integer> countTachycardia;

    private List<CountAbnormalDTO> dtos;
}
