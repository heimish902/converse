# converse 클론 코딩

> converse 사이트 만들기

<img src="https://img.shields.io/badge/-HTML5-E34F26?style=flat&logo=HTML5" /> <img src="https://img.shields.io/badge/-CSS3-1572B6?style=flat&logo=CSS3" /> <img src="https://img.shields.io/badge/-jQuery-0769AD?style=flat&logo=react" />

## Usage example

## Release History
2022-01-11 
- router는 배포 방법이 다르다. * 잊지 말것!

2022-01-12 
- 기존에 App.js에 몰려있던 코드를 컴포넌트 별로 모듈화했다.
- 상품 데이터 파일을 따로 만들어 한 파일에서 import 할 수 있도록 변경 
- 이미지는 깃허브 절대주소로 저장해서 경로와 상관없이 정상 작동하도록 변경 
- 메인페이지 section 추가 / footer 제작 
- 꼼데가르송 상세페이지 제작(-ing)
- 링크를 누르면 하트를 누를 수 없는 오류 수정

2022-01-13
- 상세페이지 Router를 반복문으로 만들어서 유사한 페이지를 중복으로 만들지 않도록 수정했다. 
- return 하는 것을 자꾸 깜빡해서 오류도 없는데 코드는 안보이는 상황이 자꾸 발생한다. *** 
- 확장성이 있는 코드를 짜려다보니 페이지마다 변하는 이미지 구현이 너무 어렵다
- 계속 이미지 이름을 수정해서 넣어보고 있다. 
- 사이지를 고를 수 있는 기능도 추가했다. 데이터 안에 재고 수량도 기입해서, 수량이 0이면 품절이라고 표시된다. 

2022-01-14
- 상세페이지 내에 사이즈를 누르면 해당 신발에 대한 데이터에 사이즈 정보가 추가로 저장된다. 
- 주문하기를 누르면 해당 신발의 정보들이 표기되고, 같은 상품은 수량이 증가하고, 다른 상품은 목록에 새로 추가되도록 구현했다.

앞으로 구현해야 할 것들* 
- 수량에 따라 변경되는 가격 (total란 포함) 
- 데이터 내에 재고가 0이 되면 사이즈 선택이 불가능하도록 하는 기능 
- 새로고침하거나 뒤로가도 계속 남아있는 장바구니 데이터 (localStorage ?)
- 
## Meta

park ji ho – [hemish902@tistory.com](https://heimish902@tistory.com) - frontend_web@kakao.com

[https://github.com/heimish902/github-link](https://github.com/heimish902/)
