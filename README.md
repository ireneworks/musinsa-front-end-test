# Musinsa Frontend Test

## 실행 방법

1. 의존성 설치하기
```
$ npm install
```

2. 프로젝트 시작하기
```
$ npm start
```

## 프로젝트 파일구조
```
┌── src    
│   ├── @types
│   │    ├── dto              (데이터 전송 객체 타입들의 집합)
│   │    ├── model            (도메인별 타입들의 집합)
│   │    ├── utility          (유틸성 타입들의 집합)
│   ├──  apis                 (도메인별 페이지 안에서 호출하는 api 로직들)
│   ├── assets                (전역적으로 사용되는 공통 이미지들의 집합)
│   ├── components            (전역적으로 사용되는 공통 컴포넌트들의 집합)
│   ├── hooks
│   ├── modules               (비즈니스 로직과는 상관없는 유틸성 함수들의 집합)         
│   ├── pages                 (페이지 내 컴포넌트들의 집합)
│   │    ├── [domain page]       
│   │    │     └── components (해당 페이지 안에서만 사용되는 컴포넌트들의 집합)   
│   └── styles                (각 컴포넌트 내에서 사용되는 공통 스타일 변수들의 집합)
```


## 사용 라이브러리
- react
- typescript
- styled-component
- axios
- prettier
