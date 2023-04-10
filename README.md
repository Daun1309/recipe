# 🥦🍅🥬 냉장고 속 갖가지 레시피 Chef Lee 🧅🧄🥔

![banner](https://velog.velcdn.com/images/tahl04/post/481e73a2-e1e0-48f9-b258-f31fc0487240/image.png)

<br>

## 🌱 프로젝트 소개및 제작 계기
냉장고를 관리해주는 어플로 재료를 쉽고 편리하게 관리 할 수 있고, 냉장고 속 재료로 만들 수 있는 음식의 조리법, 영양 성분에 관한 자료를 제공해주는 모바일 전용 사이트입니다.

React를 기반으로 한 프로젝트를 만들기로 했습니다.
외부의 api를 받아와 프로젝트를 만들고 싶다는 생각이 들어 무료 api자료들을 찾아보던 중 식품의약품안전처에서 제공하는 조리식품의 레시피DB라는 api를 찾게 되어 요리 레시피 관련 프로젝트를 구상했습니다.
요리 관련 웹사이트 아이디어 구상 중에 자취할때 요리를 해 먹으려 사놓은 재료들을 다 쓰지 않은 채로 아깝게 버려지던 생각이 나서,특정 재료만을 입력하여 만들 수 있는 요리 레시피를 보여주는 웹사이트를 만들어야겠다고 생각했습니다. 그렇게 자취생들과 주부를 대상으로 한 CHEF LEE 라는 웹 사이트를 기획하였습니다. 여기서 CHEF LEE의 뜻은 저와 팀원 어머니의 이름 성씨에서 따왔고, 엄마가 해주던 맛있는 음식이라는 뜻을 품고 있습니다.

<br>

## ⏱ 프로젝트 기간

> 2022.04.22 ~ 2022.06.03 (6주)

<br>


#### 유진열 🔰

✅ 페이지
<br>
로그인 페이지, 메인 페이지, 그룹러닝 페이지, 추천코스 페이지, 그룹채팅
<br></br>

✅ 기능
<br>
`카카오 로그인` `네이버 로그인` `JWT토큰(Access, Refresh) 적용`
<br>
``
<br>
`배너&게시물 슬라이드` `알림 기능` `중복 필터 검색 기능` `캘린더 기능`
<br>
`게시글 관련 기능(조회,등록,수정)` `카카오 지도 연동(Polyline 드로잉)` `사진 다중 업로드`
<br>
`카카오 공유하기 기능` `댓글 & 대댓글 기능` `러닝 신청하기` `Scroll 이벤트 기능` `북마크 기능` `평점 기능`
<br>
`CI/CD 세팅 및 배포환경 구축(AWS Route53, Amplify)`
<br>
`반응형CSS 구현`
<br>

#### 김다운

✅ 페이지
<br>
마이 페이지, 랜딩 페이지, 출석체크 페이지, 호스트 평가 페이지
<br></br>

✅ 기능
<br>
`출석체크` `호스트 평가` `서비스 소개 모달 슬라이드`
<br>
`휴대폰 인증` `회원 탈퇴 기능` `회원 정보 수정` `사진 업로드`
<br>
`참여 예정, 참여 완료, 내가만든 그룹러닝, 북마크 한 게시물, 내가만든 코스추천 게시글 조회` `호스트 평가 표 조회`
<br>
`반응형CSS 구현`

<br>

## 📢 이RUN저RUN 서비스 주요기능

### 🎵 함께 뛰고 싶은 사람들을 위한 그룹 러닝 매칭 플랫폼

#### 🔐 카카오/네이버 소셜 로그인

- 별도의 정보 입력 없이 간편하게 로그인할 수 있습니다.

#### 🏃‍♀그룹러닝 모집 & 그룹채팅

- 다른 사람과 뛰고 싶은 코스를 직접 그려서 함께 뛸 사람을 모집할 수 있습니다.
- 채팅을 통해 질문과 답변에 대한 소통을 할 수 있습니다.

#### ✔ 출석체크/크루장 평가

- 출석체크와 크루장 평가를 통해 그룹러닝에 대한 후기를 남길 수 있습니다.
- 출석체크와 크루장 평가는 유저의 굿러너 레벨과 연동됩니다.

#### 🗾 코스추천

- 내가 뛰어본 코스를 직접 그려서 나만의 코스 맛집을 다른 사람과 공유할 수 있습니다.

#### 📱 핸드폰 인증 및 SMS 알림 기능

- 신청한 그룹러닝을 잊지 않고 참석하고 후기를 남길 수 있도록, SMS 문자 알림을 보내드립니다.

<br>

## ✨ 아키텍쳐

![stack_diagram](https://ifh.cc/g/7RDWVT.png)

## 🔨 기술스택

### **Tech**

<p>
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/axios-007CE2?style=for-the-badge&logo=axios&logoColor=white">
<img src="https://img.shields.io/badge/reactrouterdom-CA4245?style=for-the-badge&logo=reactrouterdom&logoColor=white">
<img src="https://img.shields.io/badge/socket.io-010101?style=for-the-badge&logo=reactrouterdom&logoColor=white">
</br>
<img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">
<img src="https://img.shields.io/badge/amazonaws-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white">
<img src="https://img.shields.io/badge/amazonamplify-orange?style=for-the-badge&logo=amazonsamplify&logoColor=white"> 
<img src="https://img.shields.io/badge/route53-F7A81B?style=for-the-badge&logo=route53&logoColor=white">
<img src="https://img.shields.io/badge/SweetAlert2-362D59?style=for-the-badge&logo=SweetAlert2&logoColor=black">
</br>
<img src="https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white" >
<img src="https://img.shields.io/badge/Kakao Map Api-F3DC00?style=for-the-badge&logo=KaKao Map Api&logoColor=white">
<br>
</p>

### **Design**

<p>
<img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=Figma&logoColor=white"/>
  <img src="https://img.shields.io/badge/zeplin-FDBD39?style=for-the-badge&logo=zeplin&logoColor=FDBD39"/>
</p>

### **Tools**

<p>
<img src="https://img.shields.io/badge/VSCode-007ACC?style=for-the-badge&logo=Visual Studio Code&logoColor=white"/>
<img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white"/>
<img src="https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=github&logoColor=white">
<img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white">
<img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=Slack&logoColor=white"/>
<br>
</p>

<br>

## 📚 라이브러리
<details>
<summary><strong> 리스트 </strong></summary>

|            Name             |       Appliance       |   Version    |
| :-------------------------: | :-------------------: | :----------: |
|           swiper            |       슬라이드        |    2.1.2     |
|         sweetalert          |  에러 메세지 핸들링   |    2.1.2     |
|      styled-components      |   컴포넌트 스타일링   |    5.3.5     |
|            Redux            |       상태 관리       |    4.2.0     |
|            axios            |       서버통신        |    0.26.1    |
|         React-redux         |       상태관리        |    8.0.1     |
|      React-router-dom       |        라우터         |    5.3.0     |
|         Redux-thunk         |    리덕스 미들웨어    |    2.4.1     |
|        Redux-actions        |       액션 관리       |    2.6.5     |
|   Connected-react-router    |  히스토리 객체 관리   |    6.9.2     |
|            Immer            |      불변성 유지      |    9.0.12    |
|           History           |      페이지 이동      |    4.10.1    |
|     express-rate-limit      | API 사용량 제한(보안) |    6.4.0     |
|        react-geocode        | 위도,경도로 주소 얻기 |    0.2.3     |
|       react-calendar        |         달력          |    3.7.0     |
|         react-icons         |        아이콘         |    4.3.1     |
|      react-responsive       |       반응형 웹       | 9.0.0-beta.6 |
|         React-share         |     SNS 공유하기      |    4.4.0     |
|            Dayjs            | 날짜, 시간 라이브러리 |    1.11.0    |
|        react-scroll         |        스크롤         |    1.8.7     |
|      react-date-range       |    달력 날짜 범위     |    1.4.0     |
|      react-datepicker       |        캘린더         |    4.7.0     |
| react-intersection-observer |      무한 스크롤      |    9.1.0     |
|    react-kakao-maps-sdk     |      카카오 지도      |    1.0.6     |
|     react-photo-collage     | 이미지 레이아웃 편집  |    1.0.9     |
|           lodash            |      데이터 구조      |   4.17.21    |
|           socket.io-client            |      데이터 구조      |   4.5.1    |
</details>
 <br>
 
<!--  ## 🖥 Core tech
### 🔐 회원가입/로그인/사용자 인증 : 카카오/네이버 소셜로그인,JWT 토큰 방식(Access token/Refresh token)
- 카카오와 네이버 소셜로그인으로 별도 회원가입 과정 없이 간단하게 가입  
- JWT 토큰 인증 방식을 통해 회원들의 로그인 인증관리 및 Access / Refresh 토큰을 활용하여 로그인 기간 관리

### 📷 카카오 지도 코스 그리기 및 거리/소요시간 자동 측정

- 카카오 지도를 활용하여 지도 위에 나만의 코스를 그리고 거리/소요시간이 자동 측정

### 💻 반응형 미디어 쿼리(react-responsive)

- 모바일 사용자가 많은점을 고려하여 데스크탑,노트북,모바일 최적화 진행

### ⏰ 게시물 중복 필터

- 러닝의 특성상 여러가지 환경을 고려한 지역/시간/날짜/거리/러닝환경 등을 활용한 필터 검색 기능 -->

<br/>

## 🔥 Trouble shooting
<details>
<summary><strong> issue1: JWT 액세스,리프레쉬 토큰 관리 </strong></summary>

#### 🙁 situation

- 토큰 탈취에 대한 보안을 강화하기 위해 액세스 토큰의 시간을 짧게 하고 액세스토큰의 재발급이 가능한 리프레쉬 토큰 도입

#### 🛑 cause

- 두 가지의 토큰을 로그인이 필요한 모든 통신에 담아주다보니 불필요한 코드가 길어지고 토큰을 빠트리게 되는 문제 발생
- 액세스 토큰이 만료될 시 리프레쉬 토큰을 통해 재발급을 해주지만 실패한 요청을 재요청하지 않음

#### 🚥 solution

- request 요청에 대한 인터셉터를 만들어 자동으로 모든 요청에 두가지의 토큰을 전달
- response가 실패 시 액세스토큰이 만료되어 재발급 되는 경우면 새토큰을 쿠키에 저장하고 본래의 요청을 다시 요청하는 인터셉터 구성
</details>

<details>
<summary><strong> issue2: 게시물 등록 시 각 단계별 데이터 전역 관리 </strong></summary>

#### 🙁 situation

- 게시물 등록 시 입력 정보량(지도마킹, 10여개의 입력값, 다중 이미지)이 많아 3단계로 나누어진 등록 프로세스 진행

#### 🛑 cause

- 각 단계를 넘나들 때 컴포넌트가 많아 useState의 데이터를 props로 주고받는 과정에서 데이터가 초기화 되고 자식컴포넌트에서 부모컴포넌트의 데이터를 바꿔야 하는 경우가 발생

#### 🚥 solution

- 상속된 컴포넌트가 많고 부모,자식 컴포넌트의 원활한 데이터 전역 관리를 위한 리덕스 활용
</details>

<details>
<summary><strong> issue3: 이미지 업로드 속도 </strong></summary>

#### 🙁 situation

- 서비스 특성상 게시물(그룹러닝/코스추천) 등록 시 다중 사진 업로드로 고화질 이미지 업로드의 가능성이 있음

#### 🛑 cause

- 유저 테스트 결과 2mb가 넘거나 스마트폰 후면카메라로 찍을 시 5mb가 넘는 사진들이 업로드 될 시 업로드가 오래 걸려 유저가 등록 후 오류로 인식하는 상황 발생

#### 🚥 solution

-  browser-image-compression 라이브러리로 1장,2장,3장 업로드 되는 각각의 상황을 고려하여 이미지를 압축한 후 서버로 전달
  -> 데스크탑 테스트 결과 5Mb가 넘는 사진은 1Mb 이내로 용량을 압축하였고 업로드 속도를 50% 이상 줄여 업로드 속도 개선
</details>

<br></br>
## 🌸 More Info

[🌿 프로젝트 소개 문서]  
[💾 와이어프레임](https://www.figma.com/file/KHfXRCNHENbZ7PBS1DYT7O/%EC%9D%B4RUN%EC%A0%80RUN?node-id=0%3A1)
