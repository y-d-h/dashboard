package com.azone.control_system.controller;

import com.azone.control_system.dto.*;
import com.azone.control_system.model.ModelResultEntity;
import com.azone.control_system.model.UserInputEntity;
import com.azone.control_system.service.ModelResultService;
import com.azone.control_system.service.UserInputService;
import lombok.extern.slf4j.Slf4j;
import org.apache.el.parser.AstFalse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*")
@Slf4j
@RestController
@RequestMapping("userinput")
public class UserInputController {
    @Autowired
    private UserInputService service;

    @Autowired
    private ModelResultService modelResultService;

    @GetMapping
    public ResponseEntity<?> retreiveUserInput(){
        List<UserInputEntity> entities = service.findAll();

        List<UserInputDTO> dtos = entities.stream().map(UserInputDTO::new).collect(Collectors.toList());

        ResponseDTO<UserInputDTO> response = ResponseDTO.<UserInputDTO>builder().data(dtos).build();

        return ResponseEntity.ok().body(response);
    }

    @GetMapping("/reference")
    public ResponseEntity<?> referenceValue(){
        int countHighTemperature = service.countHighTemperature();
        int countHypothermia = service.countHypothermia();
        int countHighBloodPressure = service.countHighBloodPressure();
        int countHypotension = service.countHypotension();
        int countBradycardia = service.countBradycardia();
        int countTachycardia = service.countTachycardia();
        int total = service.totalCount();
        LocalDateTime now = LocalDateTime.now();         // 현재 날짜/시간 출력
        String formatedNow = now.format(DateTimeFormatter.ofPattern("yyyy-MM-dd"));

        ReferenceValueDTO dto = new ReferenceValueDTO();
        dto.setCountHighTemperature(countHighTemperature);
        dto.setCountHypothermia(countHypothermia);
        dto.setCountHighBloodPressure(countHighBloodPressure);
        dto.setCountHypotension(countHypotension);
        dto.setCountBradycardia(countBradycardia);
        dto.setCountTachycardia(countTachycardia);
        dto.setTotal(total);

        dto.setToday(service.todayCount(formatedNow));

        return ResponseEntity.ok().body(dto);
    }

    @PostMapping("/statistics")
    public ResponseEntity<?> statisticsValue(){
            LocalDateTime now = LocalDateTime.now();
            List<CountAbnormalDTO> lists = new ArrayList<>();
            for(int i = 0; i<7; i++) {
                LocalDateTime temp = now.minusDays(i);
                String formatedNow = temp.format(DateTimeFormatter.ofPattern("yyyy-MM-dd"));
                CountAbnormalDTO dto = new CountAbnormalDTO();
                dto.setCountHighTemperature(service.countStaticHighTemperature(formatedNow));
                dto.setCountHypothermia(service.countStaticHypothermia(formatedNow));
                dto.setCountHighBloodPressure(service.countStaticHighBloodPressure(formatedNow));
                dto.setCountHypotension(service.countStaticHypotension(formatedNow));
                dto.setCountBradycardia(service.countStaticBradycardia(formatedNow));
                dto.setCountTachycardia(service.countStaticTachycardia(formatedNow));
                dto.setDate(formatedNow);
                lists.add(dto);
            }


        return ResponseEntity.ok().body(lists);
    }

    @PostMapping
    public ResponseEntity<?> createUserInput(@RequestBody UserInputDTO dto) {
        int age = dto.getAge();
        int height = dto.getHeight();
        int weight = dto.getWeight();
        List<ModelResultEntity> list = modelResultService.retrieve();
        ModelResultEntity sbp;
        ModelResultEntity dbp;
        if (list.get(0).getSbpOrDbp().equals("sbp")) {
            sbp = list.get(0);
            dbp = list.get(1);
        } else {
            sbp = list.get(1);
            dbp = list.get(0);
        }

        double sbpPredict = age * sbp.getAge() + height * sbp.getHeight() + weight * sbp.getWeight() + sbp.getConstVal();
        double dbpPredict = age * dbp.getAge() + height * dbp.getHeight() + weight * dbp.getWeight() + dbp.getConstVal();

        double errorValue = 0.25;
        double sbpPlusError = sbpPredict + sbpPredict * errorValue;
        double sbpMinusError = sbpPredict - sbpPredict * errorValue;
        double dbpPlusError = dbpPredict + dbpPredict * errorValue;
        double dbpMinusError = dbpPredict - dbpPredict * errorValue;

        boolean normal = false;

        if(dto.getTemperature() > 37 || dto.getTemperature() < 34 ||
                dto.getDbp() > 90 || dto.getDbp() <60 ||
                dto.getSbp() > 140 || dto.getSbp() < 100 ||
                dto.getPulse() > 100 || dto.getPulse() < 60
        ){
            normal = true;
        }


        if (sbpPlusError >= dto.getSbp() && sbpMinusError <= dto.getSbp() &&
                dbpPlusError >= dto.getDbp() && dbpMinusError <= dto.getDbp()) {
            LocalDateTime now = LocalDateTime.now();         // 현재 날짜/시간 출력
            String formatedNow = now.format(DateTimeFormatter.ofPattern("yyyy-MM-dd"));
            UserInputEntity entity = UserInputEntity.builder()
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
                    .time(formatedNow)
                    .normal(normal)
//                    .date(now)
                    .build();
            UserInputEntity data = service.create(entity);
            return ResponseEntity.ok().body(data);
        }
            ResponseDTO responseDTO = ResponseDTO.<AdminDTO>builder()
                    .error("Error")
                    .build();
            return ResponseEntity.badRequest().body(responseDTO);
        }


        @PostMapping("/detail")
        public ResponseEntity<?> detail (@RequestBody UserInputDTO dto){
            List<UserInputEntity> entities = service.findByPhone(dto.getPhone());
            List<UserInputDTO> dtos = entities.stream().map(UserInputDTO::new).collect(Collectors.toList());

            ResponseDTO<UserInputDTO> response = ResponseDTO.<UserInputDTO>builder().data(dtos).build();

            return ResponseEntity.ok().body(response);
        }

        @PostMapping("/search")
        public ResponseEntity<?> search (@RequestBody UserInputDTO dto){

            List<UserInputEntity> entities = service.searchUserInput(
                    dto.getName(), dto.getSex(), dto.getAge(), dto.getHeight(), dto.getWeight(), dto.getPulse(), dto.getSbp(), dto.getDbp(), dto.getTemperature(), dto.getPhone(), dto.getTime());
            List<UserInputDTO> dtos = entities.stream().map(UserInputDTO::new).collect(Collectors.toList());

            ResponseDTO<UserInputDTO> response = ResponseDTO.<UserInputDTO>builder().data(dtos).build();

            return ResponseEntity.ok().body(response);


        }


}
