package com.azone.control_system.persistence;

import com.azone.control_system.dto.CountAbnormalDTO;
import com.azone.control_system.model.UserInputEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserInputRepository extends JpaRepository<UserInputEntity, String> {
    List<UserInputEntity> findByPhone(String phone);




    //고체온
    List<UserInputEntity> findByTemperatureGreaterThanEqual(double temperature);
    List<UserInputEntity> findByTemperatureGreaterThanEqualAndTimeEquals(double temperature, String time);
//    int countByTemperatureGreaterThanEqualAndTimeContaining(double temperature, String time);
    //저체온
    List<UserInputEntity> findByTemperatureLessThanEqual(double temperature);
//    int countByTemperatureLessThanEqualAndTimeContaining(double temperature, String time);
    //고혈압
    List<UserInputEntity> findBySbpGreaterThanEqual(int sbp);
//    int countBySbpGreaterThanEqualOrDbpGreaterThanEqualAndTimeContaining(double temperature, String time);
    //저혈압
    List<UserInputEntity> findBySbpLessThanEqual(int sbp);
//    int countBySbpLessThanEqualOrDbpLessThanEqualAndTimeContaining(double temperature, String time);
    //서맥
    List<UserInputEntity> findByPulseLessThanEqual(int pulse);
//    int countByPulseLessThanEqualAndTimeContaining(double temperature, String time);
    //빈맥
    List<UserInputEntity> findByPulseGreaterThanEqual(int pulse);
//    int countByPulseGreaterThanEqualAndTimeContaining(double temperature, String time);


    List<UserInputEntity> findByTemperatureLessThanEqualAndTimeEquals(double temperature, String time);
    //    int countByTemperatureLessThanEqualAndTimeContaining(double temperature, String time);
    //고혈압
    List<UserInputEntity> findBySbpGreaterThanEqualAndTimeEquals(int sbp, String time);
    //    int countBySbpGreaterThanEqualOrDbpGreaterThanEqualAndTimeContaining(double temperature, String time);
    //저혈압
    List<UserInputEntity> findBySbpLessThanEqualAndTimeEquals(int sbp, String time);
    //    int countBySbpLessThanEqualOrDbpLessThanEqualAndTimeContaining(double temperature, String time);
    //서맥
    List<UserInputEntity> findByPulseLessThanEqualAndTimeEquals(int pulse, String time);
    //    int countByPulseLessThanEqualAndTimeContaining(double temperature, String time);
    //빈맥
    List<UserInputEntity> findByPulseGreaterThanEqualAndTimeEquals(int pulse, String time);

    int countByTimeGreaterThanEqual(String date);

    @Query(value ="select * from UserInput where name like concat('%', :name, '%') "
            +
            "and (sex = :sex or sex = :sex2) "
            +"and age >= :age and age < :ageMax and " +
            "height >= :height and height < :heightMax and "+
            "weight >= :weight and weight < :weightMax and pulse >= :pulse and pulse < :pulseMax and " +
            "sbp >= :sbp and sbp < :sbpMax and dbp >= :dbp and dbp < :dbpMax and " +
            "temperature >= :temperature and temperature < :temperatureMax and " +
            "phone like concat('%', :phone, '%') and time like concat('%', :time, '%')"
            , nativeQuery = true)
    List<UserInputEntity> searchUserInput(@Param(value = "name") String name,
                                          @Param(value = "sex") int sex,
                                          @Param(value = "age")  int age,
                                          @Param(value = "height") int height,
                                          @Param(value = "weight") int weight,
                                          @Param(value = "pulse") int pulse,
                                          @Param(value = "sbp") int sbp,
                                          @Param(value = "dbp") int dbp,
                                          @Param(value = "temperature") double temperature,
                                          @Param(value = "sex2") int sex2,
                                          @Param(value = "ageMax")  int ageMax,
                                          @Param(value = "heightMax") int heightMax,
                                          @Param(value = "weightMax") int weightMax,
                                          @Param(value = "pulseMax") int pulseMax,
                                          @Param(value = "sbpMax") int sbpMax,
                                          @Param(value = "dbpMax") int dbpMax,
                                          @Param(value = "temperatureMax") double temperatureMax,
                                          @Param(value = "phone") String phone,
                                          @Param(value = "time") String time);

//    @Query(value="SELECT @rownum\:= @rownum + 1 AS id, (SELECT count(*) FROM UserInput ui2 WHERE ui2.temperature < 36.1 and date_format(ui2.date, '%Y%m%d') = date_format(ui.date, '%Y%m%d')) AS sex, \n" +
//            "(SELECT count(*) FROM UserInput ui2 WHERE ui2.temperature > 37.2 and date_format(ui2.date, '%Y%m%d') = date_format(ui.date, '%Y%m%d')) AS age, \n" +
//            "(SELECT count(*) FROM UserInput ui2 WHERE ui2.sbp > 120 AND ui2.dbp > 80 and date_format(ui2.date, '%Y%m%d') = date_format(ui.date, '%Y%m%d')) AS height,\n" +
//            "(SELECT count(*) FROM UserInput ui2 WHERE ui2.sbp < 90 AND ui2.dbp < 60 and date_format(ui2.date, '%Y%m%d') = date_format(ui.date, '%Y%m%d')) AS weight,\n" +
//            "(SELECT count(*) FROM UserInput ui2 WHERE ui2.pulse < 60 and date_format(ui2.date, '%Y%m%d') = date_format(ui.date, '%Y%m%d')) AS sbp,\n" +
//            "(SELECT count(*) FROM UserInput ui2 WHERE ui2.pulse > 100 and date_format(ui2.date, '%Y%m%d') = date_format(ui.date, '%Y%m%d')) AS dbp,\n" +
//            "DATE_FORMAT(ui.date, '%Y%m%d') AS time FROM UserInput ui (SELECT @rownum :=0) AS r where date >= :date GROUP BY DATE_FORMAT(time, '%Y%m%d') ORDER BY date DESC;", nativeQuery = true)
//    List<UserInputEntity> countStatic(@Param(value = "date") String date);



}
