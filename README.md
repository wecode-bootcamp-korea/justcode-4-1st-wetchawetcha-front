## WETCHA WETCHA

<br />

<img width="950" alt="스크린샷 2022-04-15 오전 9 51 37" src="https://user-images.githubusercontent.com/97730865/163500832-e1ca0931-8e6b-44d3-a3b3-631c2bbbd625.png">

🎬 [Wetcha PEDIA 구현영상 보러 가기](https://www.youtube.com/watch?v=HkkZfwLtfis)

<br/>

## Introduction

<br/>

- 영화, 책, TV 프로그램 추천 및 평가 서비스를 제공하는 왓챠피디아 클론 프로젝트
- 개발에 집중하기 위해서 디자인 / 기획 부분을 클론했습니다.
- 개발은 초기 세팅부터 전부 직접 구현했으며, 아래 데모 영상에서 보이는 부분은 모두 백엔드와 연결하여 실제 사용할 수 있는 서비스 수준으로 개발한 것입니다.
- 진행 기간 : 2022.03.28 ~ 2022.04.08 (12일)
- [Back-end GitHub 바로가기](https://github.com/wecode-bootcamp-korea/justcode-4-1st-wetchawetcha-back)!

<br/>

## DB Modeling

<br/>

<img width="882" alt="스크린샷 2022-04-13 오후 4 52 44" src="https://user-images.githubusercontent.com/97730865/163501445-04ca5490-72b1-49bb-a6a4-99b76f72245c.png">


<br/>

## 담당자 별 구현 기능

<br/>

**[Front]**

<br/>

🧑‍💻 공민지

1. Header UI 구현 및 기능 추가
- 로고 클릭 시 메인 페이지로 이동 기능 구현
- 로그인 / 회원가입 버튼 클릭 시 모달창 팝업
- 로그인 시 아이디랑 비밀번호 검증 후 버튼 활성화
- 로그인 시 로그인 / 회원가입 버튼 대신 사용자 이름 렌더링
- 회원가입 시 아이디랑 비밀번호 검증 후 버튼 활성화
- 로그인 / 회원가입 각 창에서 회원가입 / 로그인 클릭 시 각 모달창으로 이동

2. 디테일 페이지 Main Info UI 구현 및 기능 추가
- 출연 / 제작 슬라이드 기능 구현
- 슬라이더 버튼 클릭 시 슬라이드 이동
- 슬라이더의 양 끝에 있을 시에는 각 버튼이 숨겨지도록 구현
- 스크롤 부드럽게 이동하도록 구현 

3. 디테일 페이지 코멘트 팝업창 UI 구현 및 기능 추가
- 등록된 코멘트 유무에 따라서 저장 / 수정 버튼 조건부 렌더링 구현
- 등록된 코멘트 있을 시에는 팝업창 열릴 때 textArea에 표시되도록 기능 구현
- textArea에 쓰여있는 글자 수를 실시간으로 볼 수 있는 기능 구현

🧑‍💻 김영서

1. 검색창 팝업 UI 구현 및 기능 추가
- 검색어를 로컬 스토리지에 저장해 최근 검색어 목록을 보여주는 기능 구현

2. 메인 페이지 컬렉션 구현 및 기능 추가
- 포스터 클릭 시 각 영화 디테일 페이지로 이동

3. Footer UI 구현 

4. 디테일 페이지 AD, Gallery UI 구현 및 기능 추가
- 갤러리 이미지 클릭 시 모달 팝업 및 슬라이드 기능 구현
- 슬라이더 버튼 클릭 시 슬라이드 이동
- 슬라이더의 양 끝에 있을 시에는 각 버튼이 숨겨지도록 구현

5. 디테일 페이지 비슷한 영화 부분 UI 구현

6. 검색 페이지 UI 구현

🧑‍💻 서채원

1. 디테일 페이지 상단 Header UI 구현 및 기능 추가
- 비로그인 상태에서 별점 등록 시도 시에 로그인 모달 창 팝업 기능 구현
- 로그인 상태에서 별점 클릭 시 별점 등록과 그에 따른 메시지 변화 기능 구현
- 별점 등록된 상태에서 다시 클릭 시 별점 취소 기능 구현
- 별 위에 마우스 접근 시 전의 별을 모두 포함해서 선택(색 변화) 기능 구현
- 보고싶어요와 코멘트 수정 버튼 위에 마우스 호버 시 스타일 변화
- 비로그인 시 보고싶어요와 코멘트 수정 버튼 클릭 시에 로그인 모달 창 팝업 기능 구현
- 로그인 후 보고싶어요 클릭 시 변화 기능 구현
- 로그인 후 코멘트 수정 클릭 시 코멘트 등록 모달창 팝업 기능 구현

2. 메인 페이지 이미지 슬라이더(6개 묶음) 구현
- 영화 정보 클릭 시 해당 영화의 상세 정보로 이동
- 슬라이더 버튼 클릭 시 슬라이드 이동
- 슬라이더의 양 끝에 있을 시에는 각 버튼이 숨겨지도록 구현
- 스크롤 부드럽게 이동하도록 구현 

🧑‍💻 임경훈

1. 메인 페이지 이미지 슬라이더(5개 묶음) 구현
- 카테고리 별 영화를 순위 순서대로 표시
- 영화 정보 클릭 시 해당 영화의 상세 정보로 이동
- 슬라이더 버튼 클릭 시 슬라이드 이동
- 슬라이더의 양 끝에 있을 시에는 각 버튼이 숨겨지도록 구현
- 스크롤 부드럽게 이동하도록 구현 

2. 디테일 페이지 코멘트 리스트 UI 및 기능 구현
- 각 영화마다 코멘트 리스트 표시
- 개별 코멘트에 좋아요 버튼으로 좋아요 추가 / 삭제
- 개별 코멘트의 총 좋아요 수 표시

<br/>

**[Back]**

<br/>

🧑‍💻 김영서

1. 코멘트 API
- 특정 영화 코멘트 리스트 조회
- 특정 유저가 등록된 코멘트 조회
- 코멘트 등록
- 등록된 코멘트 수정
- 등록된 코멘트 삭제
- 코멘트 좋아요 수 증가 / 감소 기능
- 좋아요 여부 체크

2. 영화 정보 API
- 영화 카테고리 별 조회

🧑‍💻 서채원

1. 로그인 API
- 토큰 발급 후 쿠키에 저장 구현
- 입력값을 받아와 유효할 시 로그인 성공


🧑‍💻 이의택

1. 영화 정보 API
- 영화 기본 정보 조회
- 영화 이미지 조회
- 영화 컬렉션 별 개수 제한 리스트 조회

2. 평점 기능 API
- 영화의 유저 평점 부여 
- 영화의 유저 평점 변경 
- 영화의 유저 평점 삭제 

3. 평점 정보 API
- 영화의 누적 유저 평점 정보 조회
- 영화 총 누적 평점 정보 조회

4. 보고싶어요 API
- 영화의 유저 보고싶어요 
- 영화의 유저 보고싶어요 변경 
- 영화의 유저 보고싶어요 정보 조회 

🧑‍💻 임경훈

1. 영화 검색 API 
- 검색 키워드 입력 시 해당 키워드를 제목에 포함한 영화 리스트 검색
2. 영화 장르별 호출 API
- 장르별 영화 리스트 조회
3. 회원가입 API 구현
- 회원 등록 시 ID, Password 유효성 검사 기능
- 중복 회원 검사 기능

<br/>

## Members

<br/>

- 공민지 : [기술 블로그](https://velog.io/@minzyaaaaaa)
- 김영서 : [기술 블로그](https://youngseokim-kr.github.io/)
- 서채원 : [기술 블로그](https://chaeoff.medium.com/)
- 이의택 : [기술 블로그](https://velog.io/@nsoarim)
- 임경훈 : [기술 블로그](https://velog.io/@wlsun)
   
<br/>

## Reference

<br/>

- 이 프로젝트는 [왓챠피디아](https://pedia.watcha.com/ko-KR/) 사이트를 참조하여 학습 목적으로 만들었습니다.
- 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
