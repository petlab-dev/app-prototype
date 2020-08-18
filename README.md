# Catsome [![Netlify Status](https://api.netlify.com/api/v1/badges/48187b44-2138-4191-8600-97ac41042a2f/deploy-status)](https://petlab.info)

> **Table of Contents**
>
> - [Demo](#demo)
> - [Showcase](#showcase)
> - [Raising a problem](#raising-a-problem)
> - [Solution](#Solution)
> - [Result](#result)
> - [Motivation to Participate](#motivation-to-participate)
> - [Progress](#progress)
> - [Technical stack](#technical-stack)

## Demo

- [Deployed on Netlify](https://petlab.info) / [Deployed on Expo](https://exp.host/@dididy/fe)
- [Poster](https://drive.google.com/file/d/1ql2pufYcAzhNZRWuFUrfHmj1LD_nYuE9/view?usp=sharing)
- [Pitch/Demo Video](https://youtu.be/wO3wR9bV7Yo)

## Showcase

<p align="center">
<img width="100%" alt="Screen Shot 2020-08-18 at 1 35 30 PM" src="https://user-images.githubusercontent.com/16266103/90470940-bdbe6f80-e157-11ea-8753-8615796aec64.png">
</p>

## Raising a problem

1. 반려동물의 건강상태를 육안만으로 확인하기 어렵기 때문에 질병이 악화되는 등의 문제가 발생
2. 반려묘와 사람은 의사소통이 어렵기 때문에 조기진단이 어려워 병이 악화된 상황에서 진료비 부담이 높은 경우가 많음 
3. 동물병원에서 받는 건강검진이 비용적으로 부담되기 때문에 반려인들이 건강검진을 하는 것에 보수적임
   - 해당 아이템을 사용 할 경우 아이들의 건강상태 진단 진입장벽이 낮춤으로서 손쉽게 조기진단이 가능하도록 함	

## Solution

- 고양이 모래에 pH 반응에 따라 아래와 같이 색상이 변화하는 시약이 포함된 고양이 모래 출시
   - 출시를 위한 연구개발 진행 중
- 고양이가 모래에 오줌을 쌀 경우 pH 농도에 따라 반응한 색변화로 건강이상 검출 가능

<p align="center">
<img src="https://user-images.githubusercontent.com/16266103/90470101-8f3f9500-e155-11ea-8467-a17186901d3e.png" width="40%"></img>
<img src="https://user-images.githubusercontent.com/16266103/90470136-a5e5ec00-e155-11ea-9d03-3e96ba304134.png" width="40%"></img>
</p>

- pH 산성도 검사
  - 빨간색(정상) / 파란색(비정상)
  - 노란색(정상) / 보라색(비정상)

<p align="center">
<img src="https://user-images.githubusercontent.com/16266103/90469919-12acb680-e155-11ea-9dca-6aa64b8cd4d4.png" width="60%"></img>
</P>

- HSV의 h 범위에 따른 색상값 중 파란색에서 보라색 범위의 색상만 검출하도록 하면 됨
- 진행 과정
  - 어플리케이션 카메라로 찍은 사진을 Firebase storage에 업로드
  - GCP Vision API로 주요 색상값(R,G,B) 10개를 어플리케이션에 반환
  - RGB 색상값을 HSV로 변환 후 h 값의 범위에 따라 이상이 있는지 검출

### Result

- [x] Login Page
  - [x] Oauth 기능
    - [x] Facebook, Google - iOS, Android 에서만 동작
    - [x] Naver, Kakao - 모든 플랫폼에서 동작
- [x] Main Page
  - [x] 로고 클릭시 폭죽 이벤트 - Web 에서만 동작
  - [x] 검색 => input에 입력된 내용에 대한 Naver 검색 결과 화면으로 이동
  - [x] 광고 Banner 제작 및 interval 효과
  - [ ] Catmate 구매 페이지(제작 중)
  - [ ] 반려동물 등록(구현 중)
  - [x] 현재 위치 기반으로 동물병원 목록
    - [x] 현재 위치 사용 권한 얻기
- [x] Cat Health Check Page
  - [x] 찍은 사진을 Firebase storage에 업로드
    - [x] 카메라 사용 권한 얻기
  - [x] Indicater 화면
  - [x] GCP Vision API로 주요 색상값(R,G,B) 10개 return
  - [x] RGB 색상을 HSV로 변환 후 h의 range에 따라 이상있는 색상 범위의 값 검출
  - [x] 결과 화면
    - [x] 이상이 없을 경우 초록 배경에 일정한 반지름
    - [x] 이상이 있는 경우 빨간 배경에 이상있는 색상은 반지름 값을 2배로 하여 강조
- [x] MyPage
  - [x] Oauth로 로그인한 계정 정보(Profile, 닉네임)을 적용(Kakao, Naver로 로그인 한 경우만 동작)
    - [ ] 추후 Google, Facebook 계정도 연동할 수 있도록 할 예정
  - [ ] 등록한 아이들에 대한 프로필 열람 기능 추가
- [ ] Edit Info
  - [ ] 회원정보를 수정할 수 있도록 함

- **향후 계획**
  - To-Do List에서 누락된 부분 구현
  - 테스트 코드 작성
  - 좀 더 다듬고 기능 추가 후 실제 앱스토어, 플레이스토어에 어플리케이션 출시
  - 실제 투자와 매출로 이어질 수 있도록 함

## Motivation to participate

- 올해 예비창업자 패키지에 선정된 후 창업팀 개발자들의 성장에 초점
- 실제 회사에서 수행하는 것처럼 협업을 진행하면서 경험을 쌓음

## Progress

- [코딩 스타일 및 규칙](https://www.notion.so/54a79206f5dd415692bfd758f6f64dff) 미리 정해놓음

- github PR review-based process에 대해 연습 후 작업 진행
- 업무는 이슈로 할당 아래와 같은 규칙을 기반으로 진행
- 팀장이 React에 미숙한 주니어 입장인 두 팀원 들의 코드를 리뷰 진행
- 와이어 프레임을 지정 후 Storybook를 사용해 View와 관련된 작업 수행

## Technical stack

<p align="center">
  <img width="764" alt="Screen Shot 2020-08-18 at 1 32 54 PM" src="https://user-images.githubusercontent.com/16266103/90470794-5b656f00-e157-11ea-8922-882f8c018b07.png">
</p>

## Teammate

- [이용재](https://github.com/dididy) - 팀장
- [유정무](https://github.com/theoldtree)
- [배민혁](https://github.com/ywca15984)

