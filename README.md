# 🥦🍅🥬 냉장고 속 갖가지 레시피 Chef Lee 🧅🧄🥔

![banner](https://velog.velcdn.com/images/daun/post/ef43a2d9-cb0c-4a32-b647-1a5fe566f9d3/image.png)

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
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<br>
</p>

### **Design**
<p>
<img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=Figma&logoColor=white"/>
</p>

### **Tools**

<p>
<img src="https://img.shields.io/badge/VSCode-007ACC?style=for-the-badge&logo=Visual Studio Code&logoColor=white"/>
<img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white"/>
<img src="https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=github&logoColor=white">
<br>
</p>

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
<summary><strong> issue1: 페이지 전환 시 애니메이션 및 스크롤 오류 </strong></summary>

#### 🙁 situation

- 메인 페이지에 있는 스크롤에 의한 애니메이션이 페이지 전환이 있고, 다시 복귀하였을 때 다시 애니메이션이 일어나지 않았다.이유는 페이지 이동을 하면서 나의 초기 스크롤 위치를 설정해주는 함수가 작동하지 않아서 였다.

#### 🚥 solution

- useLocation을 이용하여 페이지가 재할당 되었을 시 함수를 다시 실행하게 하여, 문제 없이 사용 할 수 있었다.

<details>
<summary><strong> issue2: 배포 환경 </strong></summary>

#### 🙁 situation

- 리엑트는 오로지 js형식으로 만들어지기 때문에, 그냥 작성한 코드만을 올리면 배포가 되지 않았던 걸 몰랐다. 찾아본 결과 컴파일 작업이 필요하다는 것을 알게 되었다.

#### 🚥 solution

- 빌드하는 과정에 대해 공부하여 컴파일 하였고, 변환한 html로 깃허브 레파지토리에 업로드 하였다.
</details>



<br></br>
## 🌸 More Info

[💾 와이어프레임](https://www.figma.com/file/CDKNOSVNT8V3OlYs3LGKxf/%EB%83%89%EC%9E%A5%EA%B3%A0?node-id=0-1&t=sGMlded8uHaRp1ZE-0)

