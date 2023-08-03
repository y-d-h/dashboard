## 추진배경
◦ 다중회귀분석을 통한 사용자 생체정보 데이터 관제 시스템 구축
  - 공공데이터포털의 공개된 데이터를 활용하여 데이터분류 학습 모델 구축
  - 헬스케어기반 IoT기기로부터 획득한 사용자 생체정보데이터를 학습모델 적용 및 데이터 비교 분석 가시화

</br></br>


### 1. 회귀분석 모델
![image](https://github.com/y-d-h/dashboard/assets/80196217/52c73e75-40af-481c-93c9-fa2f9d340f1d)

 - Python의 statsmodels 패키지의 ols함수를 사용한 회귀분석 모델 (coef : 회귀계수)

</br></br>

### 2. 관리자 페이지 – DashBoard
![image](https://github.com/y-d-h/dashboard/assets/80196217/b02e12e0-0b97-4dcf-a177-44c1e0136527)

 - 전체 사용자의 생제정보데이터 통계자료로서 최근 일주일 일별 이상자 통계, 누적 이상자 통계 확인가능

</br></br>

### 3. 관리자 페이지 – 사용자 통계 화면
![image](https://github.com/y-d-h/dashboard/assets/80196217/f56dcc2c-50e9-4fd0-ba4f-24c1c13ee6e5)

 - 관리자 페이지의 이력탭에서 사용자 한명을 선택시 사용자의 측정 이력 통계 확인가능

</br></br>

### 4. 개인 사용자 페이지 – 측정 결과 화면 
![image](https://github.com/y-d-h/dashboard/assets/80196217/998edc59-14fa-4031-9637-3fcce62a198d)

- 개인 사용자 페이지에서 생체정보데이터 입력 후 이상치를 확인할 수 있는 화면

</br></br>

## 개발 특이 사항
◦ 얼굴기반 혈압 측정을 위해, 사용자 생체정보(성별/키/나이/몸무게) 활용
  - 공공데이터포털의 국민건강보험공단 데이터를 이용하여 사용자의 혈압(수축기,이완기) 혈압 추정 모델계산
  - 회귀분석 모델 개발에 있어서 나이, 체중, 키를 독립변수로 사용해 신뢰도가 떨어짐

</br></br>

## 문제점 및 향후 개선방향
◦ 개인 사용자 페이지의 측정 결과 개선방향
  - 생체정보측정 결과값의 정상/비정상 식별확인이 어려움. 이에 따라, 측정결과에 따른 라벨링 표기
  - 생체정보 측정의 정상/비정상의 기준이 되는 의료데이터 자료 조사 및 반영
  - 생체정보 측정결과에 따른 사용자 결과 인터페이스 추가 개선 (결과에 따라 사용자이미지 UI/UX 색상 변경)